-- 1. Create table for translation keys
CREATE TABLE IF NOT EXISTS site_translations (
  id BIGSERIAL PRIMARY KEY,
  lang VARCHAR(10) NOT NULL, -- 'en', 'ru', 'zh'
  section VARCHAR(50) NOT NULL, -- 'nav', 'hero', 'trust', 'why', etc.
  key VARCHAR(100) NOT NULL, -- 'title', 'desc', etc.
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE (lang, section, key)
);

-- Indexing for fast key lookups
CREATE INDEX IF NOT EXISTS idx_site_translations_lookup ON site_translations (lang, section, key);

-- 2. Configure Row Level Security (RLS)
ALTER TABLE site_translations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read translations (anonymous select)
CREATE POLICY "Allow public select access" ON site_translations
  FOR SELECT USING (true);

-- Allow updates (we will connect auth later, for now allow all inserts/updates)
CREATE POLICY "Allow public insert access" ON site_translations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public update access" ON site_translations
  FOR UPDATE USING (true) WITH CHECK (true);

CREATE POLICY "Allow public delete access" ON site_translations
  FOR DELETE USING (true);

-- 3. Insert initial multilingual dictionary data (factory reset defaults)
INSERT INTO site_translations (lang, section, key, value) VALUES
-- ==========================================
-- ENGLISH (en)
-- ==========================================
('en', 'nav', 'approach', 'Our Approach'),
('en', 'nav', 'programs', 'Programs'),
('en', 'nav', 'contact', 'Contact'),

('en', 'hero', 'eyebrow', 'New Recovery Technologies'),
('en', 'hero', 'title1', 'Health '),
('en', 'hero', 'title2', 'forever'),
('en', 'hero', 'desc', 'We guarantee health and longevity throughout life.'),
('en', 'hero', 'email', 'Email'),
('en', 'hero', 'viber', 'Viber'),
('en', 'hero', 'telegram', 'Telegram'),
('en', 'hero', 'btnContact', 'Contact Us'),
('en', 'hero', 'btnPrograms', 'View Programs'),

('en', 'trust', 'guaranteeTitle', '100% Guarantee'),
('en', 'trust', 'guaranteeDesc', 'LIFETIME HEALTH & LONGEVITY'),
('en', 'trust', 'surgeryTitle', 'Without Surgery'),
('en', 'trust', 'surgeryDesc', 'NON-SURGICAL APPROACH TO TREATMENT'),
('en', 'trust', 'stageTitle', 'Any Stage'),
('en', 'trust', 'stageDesc', 'ONCOLOGY, CANCER, SARCOMA & OTHERS'),
('en', 'trust', 'worldTitle', 'Worldwide'),
('en', 'trust', 'worldDesc', 'REMOTE ASSISTANCE WITHOUT BORDERS'),

('en', 'why', 'eyebrow', 'Our Approach'),
('en', 'why', 'title', 'Why Choose Health Forever'),
('en', 'why', 'lead', 'We do what traditional medicine refuses. New technologies, an individual approach, and full responsibility for the result.'),
('en', 'why', 'point1Title', 'New Treatment Technologies'),
('en', 'why', 'point1Desc', 'We apply advanced, scientifically proven methods unavailable in regular clinics. An approach that goes far beyond standard medicine.'),
('en', 'why', 'point2Title', 'Payment Only After Recovery'),
('en', 'why', 'point2Desc', '30% of the cost is only after a confirmed result. We are so confident in our methods that we take on all the risk.'),
('en', 'why', 'point3Title', 'We Work Worldwide'),
('en', 'why', 'point3Desc', 'Remote assistance without borders — you can be anywhere. We have already helped patients from dozens of countries.'),
('en', 'why', 'point4Title', 'Any Stage & Diagnosis'),
('en', 'why', 'point4Desc', 'Oncology, AIDS, diabetes, and other “incurable” diseases. For us, there are no hopeless cases — we take on cases where others give up.'),
('en', 'why', 'quote', '“Why die when there is a solution? Write to us — and we will find it together.”'),
('en', 'why', 'quoteBtn', 'Contact Us →'),

('en', 'programs', 'eyebrow', 'Our Programs'),
('en', 'programs', 'title', 'Comprehensive Programs for Health & Success'),
('en', 'programs', 'lead', 'Each program is developed individually — taking into account your condition, goals, and lifestyle.'),
('en', 'programs', 'p1Title', 'Health Forever'),
('en', 'programs', 'p1Desc', 'Full recovery of health. A comprehensive program for deep treatment and long-term support of the body.'),
('en', 'programs', 'p2Title', 'Healthy Family'),
('en', 'programs', 'p2Desc', 'Prevention and health promotion for every family member. A joint path to longevity and quality of life.'),
('en', 'programs', 'p3Title', 'Healthy Children'),
('en', 'programs', 'p3Desc', 'Special programs for children''s growth and development. A healthy start for the rest of their lives.'),
('en', 'programs', 'p4Title', 'Sports Star'),
('en', 'programs', 'p4Desc', 'Guaranteed outstanding athletic results. Optimization of physical capabilities and recovery from injuries.'),
('en', 'programs', 'p5Title', 'Pop Star'),
('en', 'programs', 'p5Desc', 'We guarantee a strong voice and endurance for vocalists. Recovery and development of vocal cords.'),
('en', 'programs', 'p6Title', 'Didn''t find your program?'),
('en', 'programs', 'p6Desc', 'Write to us — we will develop an individual solution just for you.'),
('en', 'programs', 'p6Link', 'Write to us →'),

('en', 'contact', 'eyebrow', 'Contact'),
('en', 'contact', 'title', 'Start your journey to health today'),
('en', 'contact', 'lead', 'Write or call us — we will answer all your questions and select the optimal program.'),
('en', 'contact', 'guaranteeTitle', '💛 Payment after recovery'),
('en', 'contact', 'guaranteeDesc', 'We are so confident in the result that you pay 30% of the cost only after a confirmed recovery of health. Why die? Write, call.'),
('en', 'contact', 'treatmentLine', 'Treatment of *incurable* patients (oncology (cancer, sarcoma, etc.), AIDS, diabetes) at any stage without surgical intervention.'),
('en', 'contact', 'paymentLine', 'Payment after recovery (30%).'),
('en', 'contact', 'programsLine', 'Programs for health and successful life.'),

('en', 'footer', 'copyright', '© 2024 Health Forever. We work worldwide.'),

-- ==========================================
-- RUSSIAN (ru)
-- ==========================================
('ru', 'nav', 'approach', 'Наш подход'),
('ru', 'nav', 'programs', 'Программы'),
('ru', 'nav', 'contact', 'Связаться'),

('ru', 'hero', 'eyebrow', 'Новые технологии восстановления'),
('ru', 'hero', 'title1', 'Здоровье '),
('ru', 'hero', 'title2', 'навсегда'),
('ru', 'hero', 'desc', 'Мы гарантируем здоровье и долголетие на протяжении всей жизни.'),
('ru', 'hero', 'email', 'Электронная почта'),
('ru', 'hero', 'viber', 'Вайбер'),
('ru', 'hero', 'telegram', 'Телеграм'),
('ru', 'hero', 'btnContact', 'Написать нам'),
('ru', 'hero', 'btnPrograms', 'Посмотреть программы'),

('ru', 'trust', 'guaranteeTitle', '100% гарантия'),
('ru', 'trust', 'guaranteeDesc', 'ПОЖИЗНЕННОЕ ЗДОРОВЬЕ И ДОЛГОЛЕТИЕ'),
('ru', 'trust', 'surgeryTitle', 'Без операций'),
('ru', 'trust', 'surgeryDesc', 'НЕХИРУРГИЧЕСКИЙ ПОДХОД К ЛЕЧЕНИЮ'),
('ru', 'trust', 'stageTitle', 'Любая стадия'),
('ru', 'trust', 'stageDesc', 'ОНКОЛОГИЯ, РАК, САРКОМА И ДРУГИЕ'),
('ru', 'trust', 'worldTitle', 'Весь мир'),
('ru', 'trust', 'worldDesc', 'ДИСТАНЦИОННАЯ ПОМОЩЬ БЕЗ ГРАНИЦ'),

('ru', 'why', 'eyebrow', 'Наш подход'),
('ru', 'why', 'title', 'Почему выбирают Health Forever'),
('ru', 'why', 'lead', 'Мы делаем то, от чего традиционная медицина отказывается. Новые технологии, индивидуальный подход и полная ответственность за результат.'),
('ru', 'why', 'point1Title', 'Новые технологии лечения'),
('ru', 'why', 'point1Desc', 'Применяем передовые научно обоснованные методики, недоступные в обычных клиниках. Подход, выходящий далеко за рамки стандартной медицины.'),
('ru', 'why', 'point2Title', 'Оплата лишь после выздоровления'),
('ru', 'why', 'point2Desc', '30% стоимости — только после подтвержденного результата. Мы настолько уверены в своих методах, что берем на себя весь риск.'),
('ru', 'why', 'point3Title', 'Работаем по всему миру'),
('ru', 'why', 'point3Desc', 'Дистанционная помощь без границ — вы можете находиться где угодно. Мы уже помогли пациентам из десятков стран.'),
('ru', 'why', 'point4Title', 'Любая стадия и диагноз'),
('ru', 'why', 'point4Desc', 'Онкология, СПИД, сахарный диабет и другие «неизлечимые» заболевания. Для нас нет безнадежных случаев — мы беремся там, где другие отказываются.'),
('ru', 'why', 'quote', '«Зачем умирать, если есть решение? Напишите нам — и мы найдем его вместе.»'),
('ru', 'why', 'quoteBtn', 'Связаться →'),

('ru', 'programs', 'eyebrow', 'Наши программы'),
('ru', 'programs', 'title', 'Комплексные программы для здоровья и успеха'),
('ru', 'programs', 'lead', 'Каждая программа разрабатывается индивидуально — с учетом вашего состояния, целей и образа жизни.'),
('ru', 'programs', 'p1Title', 'Здоровье навсегда'),
('ru', 'programs', 'p1Desc', 'Полное восстановление здоровья. Комплексная программа для глубокого лечения и долгосрочной поддержки организма.'),
('ru', 'programs', 'p2Title', 'Здоровая семья'),
('ru', 'programs', 'p2Desc', 'Профилактика и укрепление здоровья каждого члена семьи. Совместный путь к долголетию и качеству жизни.'),
('ru', 'programs', 'p3Title', 'Здоровые дети'),
('ru', 'programs', 'p3Desc', 'Специальные программы для роста и развития детей. Здоровый старт на всю дальнейшую жизнь.'),
('ru', 'programs', 'p4Title', 'Звезда спорта'),
('ru', 'programs', 'p4Desc', 'Гарантированные выдающиеся спортивные результаты. Оптимизация физических возможностей и восстановление после травм.'),
('ru', 'programs', 'p5Title', 'Звезда эстрады'),
('ru', 'programs', 'p5Desc', 'Гарантируем сильный голос и выносливость для вокалистов. Восстановление и развитие голосовых связок.'),
('ru', 'programs', 'p6Title', 'Не нашли свою программу?'),
('ru', 'programs', 'p6Desc', 'Напишите нам — мы разработаем индивидуальное решение именно для вас.'),
('ru', 'programs', 'p6Link', 'Написать →'),

('ru', 'contact', 'eyebrow', 'Связаться'),
('ru', 'contact', 'title', 'Начните свой путь к здоровью сегодня'),
('ru', 'contact', 'lead', 'Напишите или позвоните нам — мы ответим на все ваши вопросы и подберем оптимальную программу.'),
('ru', 'contact', 'guaranteeTitle', '💛 Оплата после выздоровления'),
('ru', 'contact', 'guaranteeDesc', 'Мы настолько уверены в результате, что 30% стоимости вы оплачиваете только после подтвержденного восстановления здоровья. Зачем умирать? Пишите, звоните.'),
('ru', 'contact', 'treatmentLine', 'Лечение *неизлечимых* больных (онкология (рак, саркома и др.), СПИД, диабет) на любой стадии без хирургического вмешательства.'),
('ru', 'contact', 'paymentLine', 'Оплата после выздоровления (30 %).'),
('ru', 'contact', 'programsLine', 'Программы для здоровья и успешной жизни.'),

('ru', 'footer', 'copyright', '© 2024 Health Forever. Мы работаем по всему миру.'),

-- ==========================================
-- CHINESE (zh)
-- ==========================================
('zh', 'nav', 'approach', '我们的方法'),
('zh', 'nav', 'programs', '康复项目'),
('zh', 'nav', 'contact', '联系我们'),

('zh', 'hero', 'eyebrow', '新型康复技术'),
('zh', 'hero', 'title1', '永远'),
('zh', 'hero', 'title2', '健康'),
('zh', 'hero', 'desc', '我们保证终生的健康与长寿。'),
('zh', 'hero', 'email', '电子邮件'),
('zh', 'hero', 'viber', 'Viber'),
('zh', 'hero', 'telegram', 'Telegram'),
('zh', 'hero', 'btnContact', '联系我们'),
('zh', 'hero', 'btnPrograms', '查看项目'),

('zh', 'trust', 'guaranteeTitle', '100% 保证'),
('zh', 'trust', 'guaranteeDesc', '终生健康与长寿'),
('zh', 'trust', 'surgeryTitle', '无需手术'),
('zh', 'trust', 'surgeryDesc', '非手术治疗方法'),
('zh', 'trust', 'stageTitle', '任何阶段'),
('zh', 'trust', 'stageDesc', '肿瘤、癌症、肉瘤等'),
('zh', 'trust', 'worldTitle', '全球范围'),
('zh', 'trust', 'worldDesc', '无国界的远程协助'),

('zh', 'why', 'eyebrow', '我们的方法'),
('zh', 'why', 'title', '为什么选择 Health Forever'),
('zh', 'why', 'lead', '我们做传统医学拒绝做的事。最新技术、个性化方案以及对结果的完全负责。'),
('zh', 'why', 'point1Title', '最新治疗技术'),
('zh', 'why', 'point1Desc', '我们采用常规诊所无法提供的先进、经科学证实的治疗方法。这是一种远超标准医学的方法。'),
('zh', 'why', 'point2Title', '仅在康复后付款'),
('zh', 'why', 'point2Desc', '费用的30%仅在确认康复后支付。我们对自己的方法充满信心，承担所有风险。'),
('zh', 'why', 'point3Title', '我们服务全球'),
('zh', 'why', 'point3Desc', '无国界的远程协助——您可以在任何地方。我们已经为来自数十个国家的患者提供了帮助。'),
('zh', 'why', 'point4Title', '任何阶段与诊断'),
('zh', 'why', 'point4Desc', '肿瘤、艾滋病、糖尿病以及其他“不治之症”。对我们而言，没有无可挽救的病例——我们在他人放弃的地方开始。'),
('zh', 'why', 'quote', '“既然有解决方案，为什么要选择死亡？联系我们——我们将共同寻找出路。”'),
('zh', 'why', 'quoteBtn', '联系我们 →'),

('zh', 'programs', 'eyebrow', '我们的项目'),
('zh', 'programs', 'title', '健康与成功的综合项目'),
('zh', 'programs', 'lead', '每个项目均根据您的身体状况、目标和生活方式进行个性化定制。'),
('zh', 'programs', 'p1Title', '永远健康'),
('zh', 'programs', 'p1Desc', '全面恢复健康。旨在深度治疗和身体长期支持。'),
('zh', 'programs', 'p2Title', '健康家庭'),
('zh', 'programs', 'p2Desc', '预防和促进每位家庭成员的健康。共同迈向长寿与高质量生活的旅程。'),
('zh', 'programs', 'p3Title', '健康儿童'),
('zh', 'programs', 'p3Desc', '儿童成长与发育的专属项目。为一生奠定健康的开端。'),
('zh', 'programs', 'p4Title', '体育之星'),
('zh', 'programs', 'p4Desc', '保证杰出的体育成绩。优化身体潜能以及伤后康复。'),
('zh', 'programs', 'p5Title', '演艺之星'),
('zh', 'programs', 'p5Desc', '我们保证歌手强有力的声音与耐力。声带的恢复与开发。'),
('zh', 'programs', 'p6Title', '没找到适合您的项目？'),
('zh', 'programs', 'p6Desc', '联系我们——我们将专为您制定专属解决方案。'),
('zh', 'programs', 'p6Link', '联络我们 →'),

('zh', 'contact', 'eyebrow', '联系我们'),
('zh', 'contact', 'title', '从今天开启您的健康之旅'),
('zh', 'contact', 'lead', '写信或致电我们——我们将回答您所有问题并为您选择最佳项目。'),
('zh', 'contact', 'guaranteeTitle', '💛 康复后付款'),
('zh', 'contact', 'guaranteeDesc', '我们对结果充满信心，您仅在确认健康恢复后支付30%的费用。既然有解决方案，为什么要选择死亡？请写信或致电我们。'),
('zh', 'contact', 'treatmentLine', '在任何阶段均无需手术干预即可治疗 *难治性* 疾病（肿瘤（癌症、肉瘤等）、艾滋病、糖尿病）。'),
('zh', 'contact', 'paymentLine', '康复后付款（30%）。'),
('zh', 'contact', 'programsLine', '健康与成功生活的项目。'),

('zh', 'footer', 'copyright', '© 2024 Health Forever. 我们服务全球。')
ON CONFLICT (lang, section, key) 
DO UPDATE SET value = EXCLUDED.value;
