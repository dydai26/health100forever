import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../contexts/LanguageContext';

interface AdminPanelProps {
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const { allTranslations, updateTranslations, resetTranslations } = useLanguage();
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('admin_logged_in') === 'true';
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Local state for editing translations (deep clone translations)
  const [localDict, setLocalDict] = useState(() => JSON.parse(JSON.stringify(allTranslations)));

  // Active section tab
  const [activeTab, setActiveTab] = useState<'nav' | 'hero' | 'trust' | 'why' | 'programs' | 'contact' | 'footer'>('hero');

  // Success indicator message
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('admin_logged_in', 'true');
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_logged_in');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    onClose();
  };

  const handleFieldChange = (section: string, key: string, lang: Language, value: string) => {
    setLocalDict((prev: any) => {
      const copy = { ...prev };
      copy[lang][section][key] = value;
      return copy;
    });
  };

  const handleSave = () => {
    updateTranslations(localDict);
    setSuccessMessage('Changes saved successfully in real-time!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all translations to default? This will clear all custom edits.')) {
      resetTranslations();
      // Reload page to re-initialize with defaults
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  };

  const handleClose = () => {
    onClose();
  };

  // Section Labels map
  const sectionLabels = {
    nav: 'Header Navigation',
    hero: 'Hero Section',
    trust: 'Trust Indicators',
    why: 'Why Choose Us',
    programs: 'Our Programs',
    contact: 'Contact & Details',
    footer: 'Footer Details'
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-login-overlay">
        <div className="admin-login-card">
          <h2>Admin Login</h2>
          <p>Please log in to edit the website translations</p>
          <form onSubmit={handleLogin}>
            <div className="admin-input-group">
              <label htmlFor="admin-user">Username</label>
              <input
                id="admin-user"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div className="admin-input-group">
              <label htmlFor="admin-pass">Password</label>
              <input
                id="admin-pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {loginError && <div className="admin-error-text">{loginError}</div>}
            <div className="admin-login-actions">
              <button type="submit" className="admin-btn admin-btn-gold">Log In</button>
              <button type="button" onClick={handleClose} className="admin-btn admin-btn-outline">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Get formatted human-readable labels for fields
  const getFieldLabel = (key: string) => {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
  };

  // Helper to determine if input should render as a textarea (for paragraph text)
  const isLongText = (section: string, key: string) => {
    return (
      key.includes('desc') ||
      key.includes('lead') ||
      key === 'copyright' ||
      (section === 'why' && key.startsWith('point') && key.endsWith('Desc')) ||
      (section === 'programs' && key.startsWith('p') && key.endsWith('Desc'))
    );
  };

  return (
    <div className="admin-dashboard-overlay">
      <div className="admin-dashboard-container">
        {/* Header bar */}
        <header className="admin-dashboard-header">
          <div className="admin-title-block">
            <h2>Translation Dashboard</h2>
            <span>Health Forever Management Panel</span>
          </div>
          <div className="admin-header-actions">
            <button onClick={handleSave} className="admin-btn admin-btn-gold">Save Changes</button>
            <button onClick={handleClose} className="admin-btn admin-btn-outline">Back to Site</button>
            <button onClick={handleReset} className="admin-btn admin-btn-warning">Reset to Default</button>
            <button onClick={handleLogout} className="admin-btn admin-btn-danger">Logout</button>
            <button onClick={handleClose} className="admin-btn admin-btn-close">×</button>
          </div>
        </header>

        {successMessage && (
          <div className="admin-toast-success">
            {successMessage}
          </div>
        )}

        <div className="admin-dashboard-body">
          {/* Sidebar tabs selection */}
          <aside className="admin-dashboard-sidebar">
            <ul>
              {Object.keys(sectionLabels).map((sec) => (
                <li key={sec}>
                  <button
                    className={activeTab === sec ? 'active' : ''}
                    onClick={() => setActiveTab(sec as any)}
                  >
                    {sectionLabels[sec as keyof typeof sectionLabels]}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form fields editor pane */}
          <main className="admin-dashboard-main">
            <h3 className="admin-section-title">{sectionLabels[activeTab]} Text Copy</h3>
            <div className="admin-fields-list">
              {Object.keys(localDict.en[activeTab]).map((fieldKey) => (
                <div key={fieldKey} className="admin-field-card">
                  <h4>{getFieldLabel(fieldKey)}</h4>
                  <div className="admin-lang-grid">
                    {/* EN Translation Column */}
                    <div className="admin-lang-column">
                      <label className="admin-lang-badge en-badge">EN (Primary)</label>
                      {isLongText(activeTab, fieldKey) ? (
                        <textarea
                          value={localDict.en[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'en', e.target.value)}
                        />
                      ) : (
                        <input
                          type="text"
                          value={localDict.en[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'en', e.target.value)}
                        />
                      )}
                    </div>

                    {/* RU Translation Column */}
                    <div className="admin-lang-column">
                      <label className="admin-lang-badge ru-badge">RU</label>
                      {isLongText(activeTab, fieldKey) ? (
                        <textarea
                          value={localDict.ru[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'ru', e.target.value)}
                        />
                      ) : (
                        <input
                          type="text"
                          value={localDict.ru[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'ru', e.target.value)}
                        />
                      )}
                    </div>

                    {/* ZH Translation Column */}
                    <div className="admin-lang-column">
                      <label className="admin-lang-badge zh-badge">ZH</label>
                      {isLongText(activeTab, fieldKey) ? (
                        <textarea
                          value={localDict.zh[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'zh', e.target.value)}
                        />
                      ) : (
                        <input
                          type="text"
                          value={localDict.zh[activeTab][fieldKey]}
                          onChange={(e) => handleFieldChange(activeTab, fieldKey, 'zh', e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
