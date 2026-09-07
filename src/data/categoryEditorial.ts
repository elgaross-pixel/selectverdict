export interface CategoryEditorial {
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lede: string;
  intro: string[];
  examples?: string[];
  introClosing?: string[];
  criteria: { heading: string; paragraphs: string[] }[];
  evidence?: { productSlug: string; heading: string; paragraphs: string[]; steps?: string[]; boundary: string };
  relatedResearch: { href: string; label: string }[];
  closing: string[];
}

// Only published research present in main belongs here. Scheduled articles are
// deliberately excluded until their routes have been released.
const systemeResearch = [
  { href: '/reviews/systeme-io/', label: 'Systeme.io review: hands-on findings and limitations' },
  { href: '/pricing/systeme-io/', label: 'Systeme.io pricing: current plans and limits' },
  { href: '/guides/systeme-io-free-plan/', label: 'Systeme.io Free plan: capabilities and constraints' },
  { href: '/guides/what-is-systeme-io/', label: 'What is Systeme.io? Platform and workflow overview' },
  { href: '/guides/is-systeme-io-legit/', label: 'Is Systeme.io legit? Evidence and buyer considerations' },
];

const categoryEditorial: Record<string, CategoryEditorial> = {
  'marketing-automation': {
    seoTitle: 'Marketing Automation Software: What to Compare & How to Choose',
    metaDescription: 'Compare marketing automation software by workflows, email, segmentation, funnel integration, CRM fit and operating complexity.',
    eyebrow: 'Marketing automation research',
    h1: 'Marketing Automation Software',
    lede: 'Understand how marketing automation platforms differ in workflow depth, contact management, email, funnel integration, CRM fit, and complexity.',
    intro: [
      'Marketing automation software helps businesses turn repeated marketing tasks into rules, workflows, and triggered actions.',
      'At a basic level, that can mean: visitor submits a form → contact is created → tag is applied → workflow starts → follow-up message is scheduled.',
      'More advanced systems can add segmentation, lead scoring, branching logic, CRM actions, ecommerce triggers, multi-channel messaging, reporting, and integrations.',
      'The important question is not whether a platform has an “automation” feature. It is whether the automation model fits the way your business actually operates.',
    ],
    criteria: [
      { heading: 'Workflow depth', paragraphs: ['Can the system handle only simple trigger/action rules, or can it support branching workflows, conditions, delays, multiple triggers, and reusable sequences?'] },
      { heading: 'Contact and segmentation model', paragraphs: ['Automation becomes more useful when contacts can be organized by tags, fields, behavior, lifecycle stage, purchase activity, or other attributes.'] },
      { heading: 'Email integration', paragraphs: ['Some platforms treat email as a central part of automation. Others depend on external email tools. That distinction affects both simplicity and depth.'] },
      { heading: 'Funnel and form integration', paragraphs: ['For lead-generation businesses, the path from landing page to contact to workflow should be clear. A form submission that cannot easily trigger downstream actions creates unnecessary friction.'] },
      { heading: 'CRM and sales alignment', paragraphs: ['Some automation platforms are primarily marketing tools. Others connect directly to pipelines, sales stages, booking, client management, or account ownership.', 'The right architecture depends on whether the process stops at lead nurture or continues into active sales operations.'] },
      { heading: 'Complexity', paragraphs: ['More powerful automation is not automatically better. A solo founder may benefit more from a system that makes simple workflows easy than from a platform built for enterprise-style orchestration.'] },
    ],
    evidence: {
      productSlug: 'systeme-io', heading: 'Systeme.io: what our automation evidence covers',
      paragraphs: ["SelectVerdict’s hands-on Systeme.io test verified the live funnel → form submission → contact in Contacts path. We then inspected the automation layer and created a paused workflow."],
      boundary: 'We did not complete a full outbound email-delivery test. Workflow construction is separate from evidence of executed follow-up or deliverability.',
    },
    relatedResearch: systemeResearch,
    closing: [
      'Start with the automation problem you need to solve. If you need basic lead capture and follow-up, an integrated all-in-one platform may be sufficient.',
      'If you need sophisticated segmentation, email logic, agency workflows, or CRM-heavy automation, a specialist or broader operating platform may be more appropriate.',
      'The best choice is the system whose workflow model matches the actual process without forcing unnecessary complexity.',
    ],
  },
  'sales-funnels': {
    seoTitle: 'Sales Funnel Software: What to Compare Before You Choose',
    metaDescription: 'Compare sales funnel software by page building, lead capture, checkout, automation, testing, integrations and total operating complexity.',
    eyebrow: 'Sales funnel research',
    h1: 'Sales Funnel Software',
    lede: 'Compare funnel platforms by the complete path from page creation and lead capture to checkout, automation, and conversion workflows.',
    intro: ['Sales funnel software helps businesses guide visitors through a sequence of pages and actions toward a specific outcome. That outcome might be:'],
    examples: ['joining an email list;', 'booking a call;', 'buying a digital product;', 'registering for a webinar;', 'purchasing through an order form;', 'moving into a follow-up sequence.'],
    introClosing: ['A funnel is more than a landing page. The useful question is how well the platform connects each step of the customer journey.'],
    criteria: [
      { heading: 'Page and funnel building', paragraphs: ['Can you create landing pages, opt-in pages, sales pages, thank-you pages, order forms, upsells, and other funnel steps without unnecessary technical work?'] },
      { heading: 'Lead capture', paragraphs: ['A funnel should reliably move form submissions into a usable contact system. We look for a clear path from visitor action to contact record.'] },
      { heading: 'Checkout and selling', paragraphs: ['For sales funnels, checkout matters as much as page design. Relevant capabilities can include products, order forms, payment integrations, coupons, upsells, downsells, and subscription handling.'] },
      { heading: 'Automation', paragraphs: ['Strong funnel software should be able to act on what visitors do. That can include tagging contacts, starting workflows, triggering follow-up, or changing the next step in the customer journey.'] },
      { heading: 'Testing and optimization', paragraphs: ['Some businesses need deeper funnel testing, analytics, experimentation, and conversion optimization. Others need only a simple working funnel. The right platform depends on how important funnel optimization is to the business.'] },
      { heading: 'Integration vs all-in-one architecture', paragraphs: ['Some funnel builders are specialist tools that connect to separate email, CRM, course, and payment systems. Others combine several of those functions inside one platform. Neither architecture is automatically better.'] },
    ],
    evidence: {
      productSlug: 'systeme-io', heading: 'Systeme.io: what we tested in the funnel journey',
      paragraphs: ['SelectVerdict successfully:'],
      steps: ['created a funnel;', 'published a live page;', 'submitted a test lead;', 'verified the contact inside Systeme.io;', 'inspected automation;', 'created a paused workflow.'],
      boundary: 'We did not test checkout or payment execution, and we did not complete an outbound email-delivery test. The verified lead-capture path does not establish that a purchase or automated follow-up was executed.',
    },
    relatedResearch: systemeResearch,
    closing: [
      'Choose funnel software based on the role funnels play in the business. If funnels are one part of a broader small-business stack, an integrated platform may be attractive.',
      'If funnel optimization itself is a core capability, a more specialized funnel-first platform may justify higher cost and complexity.',
      'Do not choose based only on template count or marketing claims. Choose based on whether the complete path from traffic to conversion can be built, measured, and maintained reliably.',
    ],
  },
  'online-course-platforms': {
    seoTitle: 'Online Course Platforms: What to Compare Before You Choose',
    metaDescription: 'Compare online course platforms by course delivery, student limits, memberships, payments, community, automation and creator-business fit.',
    eyebrow: 'Online course platform research',
    h1: 'Online Course Platforms',
    lede: 'Compare course platforms by delivery, student capacity, memberships, payments, community, automation, and overall creator-business fit.',
    intro: [
      'Online course platforms help creators and businesses package, sell, and deliver educational content. But platforms in this category can differ dramatically.',
      'Some are primarily course-hosting systems. Others are broader creator-business platforms that also include funnels, email marketing, checkout, communities, memberships, and automation. That difference matters.',
    ],
    criteria: [
      { heading: 'Course creation and delivery', paragraphs: ['The basic requirement is the ability to organize lessons and give students reliable access. Beyond that, platforms may support video, downloads, quizzes, drip schedules, bundles, certificates, or other learning features. These are comparison criteria; not every platform includes every feature.'] },
      { heading: 'Student and product limits', paragraphs: ['A low subscription price can become less attractive if a plan has restrictive student, course, or product limits. SelectVerdict separates current published limits from historical account snapshots where they differ.'] },
      { heading: 'Checkout and payments', paragraphs: ['Course businesses need a reliable path from offer to purchase to access. Relevant capabilities may include one-time payments, subscriptions, payment plans, coupons, order forms, and payment integrations.'] },
      { heading: 'Memberships and communities', paragraphs: ['Some course businesses need more than lessons. Membership access, recurring subscriptions, discussion spaces, and community features can become central to retention.'] },
      { heading: 'Marketing automation', paragraphs: ['A creator may need a journey such as: lead capture → email follow-up → purchase → course access → ongoing customer communication.', 'Platforms that integrate these stages can reduce the number of external tools required.'] },
      { heading: 'Creator-business fit', paragraphs: ['A premium course platform may provide a deeper learning or community experience. An all-in-one platform may provide better economics and simpler operations. The right choice depends on what part of the customer experience creates value for the business.'] },
    ],
    evidence: {
      productSlug: 'systeme-io', heading: 'Systeme.io: course research and its limits',
      paragraphs: ['Systeme.io includes online-course and community functionality as part of its broader platform.', 'SelectVerdict has researched current course-related plan information and limits, including direct Systeme.io Support clarification.'],
      boundary: 'SelectVerdict has not yet completed a full hands-on course-delivery test. Feature availability must not be treated as verified course experience.',
    },
    relatedResearch: systemeResearch,
    closing: [
      'If the course itself is the core customer experience, compare platforms on learning delivery, student experience, memberships, community, and creator workflows.',
      'If the course is one part of a broader acquisition and sales system, an all-in-one platform may be more efficient.',
      'The important distinction is whether the business needs the deepest course platform or the simplest complete business stack.',
    ],
  },
};

export function getCategoryEditorial(slug: string, name: string): CategoryEditorial {
  if (Object.hasOwn(categoryEditorial, slug)) return categoryEditorial[slug];
  return {
    seoTitle: `${name} software research`,
    metaDescription: `Independent research and reviews for ${name.toLowerCase()} software.`,
    eyebrow: 'Software category',
    h1: name,
    lede: 'Published, source-backed research for this category.',
    intro: [],
    criteria: [],
    relatedResearch: [],
    closing: [],
  };
}
