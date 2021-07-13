const { Audit } = require('../models');

const auditData = [
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "313",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "313",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "313",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "313",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "314",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "313",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "82",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "94",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "113",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "79",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "319",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "311",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "166",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "147",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "163",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "134",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "165",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "158",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "160",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "161",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "155",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "146",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "156",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "157",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "152",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "154",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "153",
    campaign_id: "5",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "36",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "317",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "152",
    venue_id: "363",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "152",
    venue_id: "365",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "152",
    venue_id: "356",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "3",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "221",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "239",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "240",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "203",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "209",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "208",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "205",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "220",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "217",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "218",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "222",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "219",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "211",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "212",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "1274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "178",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "171",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "175",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "208",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "203",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "209",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "240",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "239",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "221",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "220",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "205",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "217",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "218",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "222",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "219",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "211",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "212",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "1274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "175",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "171",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "178",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "203",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "205",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "208",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "209",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "175",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "178",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "220",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "171",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "221",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "212",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "240",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "239",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "222",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "219",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "218",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "217",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "211",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "1274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "203",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "217",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "205",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "208",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "209",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "221",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "212",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "222",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "211",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "220",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "240",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "218",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "239",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "219",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "19",
    venue_id: "1274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "175",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "178",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "171",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "176",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "133",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "175",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "130",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "178",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "132",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "171",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "173",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "172",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "109",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "109",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "109",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "109",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "263",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "233",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "229",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "269",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "197",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "231",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "235",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "199",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "264",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "243",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "230",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "259",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "232",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "241",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "245",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "200",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "251",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "227",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "224",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "234",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "260",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "223",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "236",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "271",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "244",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "88",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "138",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "254",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "108",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "277",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "255",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "250",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "99",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "266",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "267",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "270",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "249",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "75",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "252",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "144",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "253",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "256",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "261",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "103",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "248",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "142",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "140",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "246",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "262",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "1273",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "265",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "274",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "276",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "278",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "275",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "93",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "90",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "96",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "85",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "76",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "77",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "109",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "74",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "106",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "112",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "114",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "101",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "122",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "123",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "120",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "102",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "116",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "111",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "117",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "87",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "86",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "73",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "98",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "167",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "169",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "164",
    campaign_id: "4",
    brand_id: "3",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "291",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "309",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "387",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "390",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "386",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "389",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "388",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "369",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "310",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "292",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "93",
    venue_id: "316",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "16",
    brand_id: "13",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "348",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "351",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "339",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "352",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "344",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "22",
    venue_id: "343",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "288",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "289",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "163",
    venue_id: "290",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "365",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "363",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "356",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "54",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "53",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "52",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "301",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "304",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "306",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "148",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "151",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "373",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "377",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "336",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "375",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "374",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "334",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "378",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "162",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "296",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "299",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "298",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "320",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "380",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "323",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "321",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "382",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "331",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "325",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "385",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "333",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "225",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "128",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "67",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "145",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "143",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "198",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "257",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "247",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "258",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "187",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "206",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "210",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "186",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "70",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "189",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "181",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "68",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "182",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "185",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "71",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "183",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "179",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "69",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "188",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "204",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "58",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "180",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "84",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "92",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "81",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "95",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "83",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "107",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "121",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "78",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "129",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "124",
    campaign_id: "18",
    brand_id: "14",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1134",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1135",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1166",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1164",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1165",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1192",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1175",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1185",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1190",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1189",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1174",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1186",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1191",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1173",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1187",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "805",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1167",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1179",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1198",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1168",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1182",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1177",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1053",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1052",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1057",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1127",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "216",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "213",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "214",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1131",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "215",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "202",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "201",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "42",
    venue_id: "207",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "157",
    venue_id: "411",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "157",
    venue_id: "413",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1078",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "414",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1116",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1113",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "694",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1111",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "193",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "194",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "192",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1117",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "195",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "771",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "196",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1124",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "768",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1126",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "680",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "285",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "279",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "738",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "281",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "202",
    venue_id: "280",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "667",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "637",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "645",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1069",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "632",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "662",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1058",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "633",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "698",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1064",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "724",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "139",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "715",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "137",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1074",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "69",
    venue_id: "721",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "141",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1128",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1083",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1088",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "35",
    venue_id: "1129",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "191",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "284",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "282",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "283",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "286",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1148",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1159",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "536",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1156",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1146",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1147",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1141",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1138",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1139",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1155",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1157",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1144",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1140",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "147",
    venue_id: "1161",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "226",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "237",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "238",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "228",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "541",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "268",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "548",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "463",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "547",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "272",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "543",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "155",
    venue_id: "242",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "496",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "136",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "100",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "78",
    venue_id: "104",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "956",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "975",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "976",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "552",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "911",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "920",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "901",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "907",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "898",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "922",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "393",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1149",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1150",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1153",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1160",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "397",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "395",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "392",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "405",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "549",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "542",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "56",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "61",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "62",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "63",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "64",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "59",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "65",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "808",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "66",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1136",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "74",
    venue_id: "1132",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "196",
    venue_id: "421",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "959",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "888",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "971",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "892",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "968",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "978",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "982",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "986",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "947",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "55",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "60",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "143",
    venue_id: "57",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "926",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "962",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "933",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "939",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "886",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "529",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "346",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "359",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1231",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "293",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "357",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1216",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "300",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "526",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "303",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "938",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1226",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "521",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "524",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "302",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "935",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1223",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "522",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "953",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1222",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "882",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "477",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "294",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "151",
    venue_id: "897",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1221",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "494",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "495",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "315",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "361",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1215",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "318",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "308",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "196",
    venue_id: "427",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "481",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "312",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "483",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "295",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "479",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "297",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "480",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "305",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "307",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "478",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "474",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "476",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "475",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1109",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "471",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1108",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "472",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "484",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1105",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "485",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "196",
    venue_id: "425",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1272",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1269",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1271",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1270",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "532",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1268",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "538",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "384",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "527",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1239",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1238",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "486",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "493",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1241",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "487",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1093",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "491",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1255",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "490",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1097",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "492",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1100",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "488",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "132",
    venue_id: "489",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "135",
    venue_id: "1099",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "446",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "540",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "80",
    venue_id: "518",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1245",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "332",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "330",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1242",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "324",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1235",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1230",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1247",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "322",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1236",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1249",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "326",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1256",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1248",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "327",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1234",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "328",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "150",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "168",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "1043",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "1044",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "135",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "127",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "131",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "126",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "149",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "1",
    venue_id: "159",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "467",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "16",
    venue_id: "402",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "468",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "849",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "337",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "186",
    venue_id: "442",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "850",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "817",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "338",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "843",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1232",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "844",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "345",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1246",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "846",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1227",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "847",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "340",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1228",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1229",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "826",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1250",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "838",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "341",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1224",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "834",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1237",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "347",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "829",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1254",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "831",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "353",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1253",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "349",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "60",
    venue_id: "836",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1219",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1218",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1220",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1212",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1214",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "175",
    venue_id: "1213",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "354",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "368",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "367",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "342",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "362",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "360",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "370",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "372",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "379",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "335",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  },
  {
    type: "audit",
    user_id: "75",
    venue_id: "381",
    campaign_id: "20",
    brand_id: "15",
    report_template_id: "1"
  }
];

const seedAudits = () => Audit.bulkCreate(auditData);

module.exports = seedAudits;
