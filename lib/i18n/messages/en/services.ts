import type { ServiceMessages } from "../../types";

export const enServices = {
  "corporate-tax": {
    "title": "Corporate Tax",
    "shortDescription": "Navigate UAE corporate tax with confidence",
    "description": "From registration to return filing, we help businesses understand and meet UAE corporate tax obligations at the 9% standard rate — with strategic planning to optimize your position.",
    "subServices": {
      "implementation": {
        "title": "Tax implementation & setup",
        "description": "We design and implement corporate tax processes tailored to your business structure — from chart of accounts mapping and tax coding to internal control frameworks and staff training. Whether you are preparing for your first tax period or restructuring after regulatory changes, we ensure your systems capture the data needed for accurate reporting. Our setup covers mainland and free zone entities, including qualifying income assessments where applicable."
      },
      "registration": {
        "title": "Corporate tax registration",
        "description": "We manage the full Federal Tax Authority registration process, including entity classification, TRN linkage, and submission of supporting documentation for mainland companies, free zone establishments, and branches of foreign entities. Our team verifies that your legal structure, trade licence, and ownership details align with FTA requirements before submission. We also handle amendments and updates when your business details change."
      },
      "compliance": {
        "title": "Ongoing compliance management",
        "description": "Corporate tax compliance is not a one-time exercise — we provide year-round monitoring of filing deadlines, regulatory updates, and changes to your business that may affect your tax position. Our compliance calendar tracks key dates for returns, payments, and disclosures so nothing is missed. Periodic health checks identify gaps early, reducing the risk of penalties and FTA enquiries."
      },
      "advisory": {
        "title": "Strategic tax advisory",
        "description": "We help you understand how corporate tax applies to your specific structure — including small business relief, free zone qualifying income, and group relief opportunities. Our advisory covers transaction planning, restructuring considerations, and exemption analysis to ensure you pay only what is legally due. For groups with multiple UAE entities, we coordinate tax planning across the organisation."
      },
      "returns": {
        "title": "Return preparation & filing",
        "description": "Our team compiles, reviews, and submits your corporate tax return with full supporting schedules and reconciliations to your financial statements. We verify taxable income calculations, allowable deductions, and transfer pricing disclosures before electronic filing through the FTA portal. Post-filing, we retain documentation in an audit-ready format and assist with any follow-up queries from the authority."
      },
      "transfer-pricing": {
        "title": "Transfer pricing documentation",
        "description": "Related-party transactions must be supported by transfer pricing documentation under UAE rules. We prepare master files, local files, and disclosure forms that demonstrate arm's-length pricing for intercompany services, management fees, royalties, and goods transfers. Our documentation aligns with OECD guidelines and FTA expectations, reducing exposure during tax audits and group compliance reviews."
      }
    }
  },
  "audit-assurance": {
    "title": "Audit & Assurance",
    "shortDescription": "Independent verification you can trust",
    "description": "Our audit team delivers rigorous financial examinations that strengthen stakeholder confidence, satisfy regulatory requirements, and uncover opportunities for improvement.",
    "subServices": {
      "financial-audit": {
        "title": "Financial statement audit",
        "description": "We conduct independent audits of your financial statements in accordance with International Standards on Auditing and IFRS, providing the assurance banks, investors, and regulators require. Our approach combines risk-based testing with substantive procedures tailored to your industry and size. The outcome is a clear audit opinion supported by well-documented working papers and management letter points where improvements can be made."
      },
      "external-audit": {
        "title": "External audit services",
        "description": "External audits are often mandated by lenders, shareholders, licensing authorities, or free zone regulators as a condition of doing business. We act as your independent auditor, examining financial records, internal controls, and disclosures to confirm they present a true and fair view. Our reports are accepted by UAE banks, government entities, and international stakeholders."
      },
      "icv-audit": {
        "title": "In-Country Value (ICV) certification",
        "description": "ICV certification is essential for companies bidding on ADNOC and other government contracts in the UAE. We calculate your ICV score based on qualifying local expenditure, Emirati headcount, and goods manufactured in the UAE. Our team prepares the certification application, supporting evidence, and coordinates with approved certifying bodies to maximise your score and maintain eligibility for supplier programmes."
      },
      "tax-audit": {
        "title": "Tax audit support",
        "description": "When the FTA selects your business for a corporate or VAT audit, timely and accurate responses are critical. We assist from the initial notification through document preparation, reconciliation of tax returns to accounting records, and representation during FTA meetings. Our goal is to resolve enquiries efficiently while protecting your position and minimising assessments or penalties."
      },
      "stock-audit": {
        "title": "Inventory & stock audit",
        "description": "Physical stock counts and valuation reviews confirm that your inventory records match what is actually on hand — essential for accurate financial reporting and loss prevention. We verify quantities, condition, ageing, and valuation methods against your accounting policies. Discrepancies are investigated and documented, giving management and auditors confidence in reported inventory balances."
      },
      "liquidation": {
        "title": "Liquidation audit",
        "description": "Company liquidation requires a final set of accounts and an independent audit report confirming assets, liabilities, and distributions to shareholders or creditors. We prepare the closing financial statements, verify settlement of outstanding obligations, and issue the audit report required by licensing authorities and courts. Our work supports smooth deregistration with the relevant UAE free zone or mainland authority."
      },
      "free-zone": {
        "title": "Free zone audit services",
        "description": "Each UAE free zone — DMCC, JAFZA, DIFC, Ajman Free Zone, and others — has specific audit requirements tied to licence renewal and regulatory compliance. We perform audits that meet your authority's format, deadline, and reporting standards. Our familiarity with free zone rules means faster turnaround and fewer resubmissions during the renewal cycle."
      },
      "due-diligence": {
        "title": "Due diligence reviews",
        "description": "Before acquiring a business or entering a major partnership, financial due diligence reveals the true state of the target's accounts, tax exposures, and working capital. We analyse historical financials, identify red flags, validate EBITDA adjustments, and assess contingent liabilities. Our reports give buyers and investors the information they need to negotiate confidently and structure deals appropriately."
      }
    }
  },
  "accounting-bookkeeping": {
    "title": "Accounting & Bookkeeping",
    "shortDescription": "Accurate books that drive decisions",
    "description": "Reliable day-to-day accounting that keeps your records audit-ready, tax-compliant, and useful for management decision-making.",
    "subServices": {
      "accounting": {
        "title": "Full accounting services",
        "description": "We manage your complete accounting function — general ledger maintenance, bank and intercompany reconciliations, accounts payable and receivable, payroll posting, and month-end close procedures. Financial statements are prepared on a timely basis and aligned with IFRS or your chosen reporting framework. Your books stay current, accurate, and ready for audit, tax filing, or management review at any time."
      },
      "bookkeeping": {
        "title": "Bookkeeping & data entry",
        "description": "Day-to-day bookkeeping is the foundation of reliable financial reporting. We record sales invoices, supplier bills, expense claims, payroll entries, and bank transactions promptly and accurately in your accounting software. Regular reconciliations catch errors early, and we can work remotely with documents you upload or integrate directly with platforms like QuickBooks, Xero, and Zoho Books."
      },
      "backlog": {
        "title": "Backlog accounting cleanup",
        "description": "Many businesses fall behind on bookkeeping during rapid growth or staff changes, creating a backlog that complicates tax filings and audits. We systematically work through unposted transactions, unreconciled bank accounts, and missing documentation to bring your records up to date. Once caught up, we transition you to a regular monthly rhythm so the backlog does not return."
      },
      "review": {
        "title": "Accounting quality review",
        "description": "If you handle bookkeeping in-house or through another provider, an independent quality review gives you confidence before year-end audit or tax filing. We examine account balances, reconciliation completeness, revenue recognition, expense classification, and compliance with UAE regulatory requirements. You receive a clear report of findings and practical recommendations to fix issues before they become costly."
      },
      "valuation": {
        "title": "Business valuation",
        "description": "Business valuations are required for shareholder disputes, M&A transactions, estate planning, and regulatory submissions. We apply recognised valuation methodologies — discounted cash flow, market multiples, and asset-based approaches — tailored to your industry and stage of business. Our reports are prepared with clear assumptions and supporting analysis suitable for negotiations, courts, or board decisions."
      },
      "fixed-assets": {
        "title": "Fixed asset management",
        "description": "Proper fixed asset tracking ensures accurate depreciation, insurance coverage, and balance sheet presentation. We maintain your asset register, calculate depreciation under your chosen method, process additions and disposals, and reconcile the register to the general ledger. Annual physical verification can be coordinated to confirm assets exist and are correctly classified."
      }
    }
  },
  "vat-indirect-tax": {
    "title": "VAT and Excise Tax",
    "shortDescription": "Stay ahead of FTA requirements",
    "description": "Comprehensive VAT and excise tax services covering registration through refunds — ensuring your tax position is accurate, timely, and optimized.",
    "subServices": {
      "vat-registration": {
        "title": "VAT registration",
        "description": "We determine whether your business meets mandatory or voluntary VAT registration thresholds and handle the full TRN application through the FTA portal. This includes preparing supporting documents, bank details, activity descriptions, and authorised signatory information. We also manage deregistration and amendments when your turnover or business structure changes."
      },
      "vat-filing": {
        "title": "VAT return filing",
        "description": "Accurate and timely VAT return filing protects you from penalties and FTA scrutiny. We prepare monthly or quarterly returns by reconciling output tax on sales to input tax on purchases, verifying tax invoice compliance, and applying correct treatment for exempt and zero-rated supplies. Each return is reviewed before submission, and payment deadlines are tracked to avoid late fees."
      },
      "vat-refund": {
        "title": "VAT refund claims",
        "description": "Businesses in refund positions — common in export-heavy, capital-intensive, or real estate sectors — can recover VAT paid on inputs. We identify refund eligibility, compile the required documentation, and submit claims through the FTA with supporting schedules and reconciliations. Our experience with refund applications improves approval rates and reduces processing delays."
      },
      "vat-audit": {
        "title": "VAT audit defense",
        "description": "FTA VAT audits examine whether your returns, tax invoices, and record-keeping meet legal requirements. We prepare audit files, respond to information requests, attend meetings on your behalf, and negotiate outcomes where discrepancies are identified. Having organised records and expert representation significantly reduces the stress and financial impact of an audit."
      },
      "vat-advisory": {
        "title": "VAT planning & advisory",
        "description": "Proactive VAT planning helps you structure transactions efficiently and avoid costly mistakes. We advise on zero-rating and exemption treatment, import and export scenarios, related-party charges, and real estate transactions. Whether you are entering a new market or restructuring operations, we ensure your VAT treatment is correct from the start."
      }
    }
  },
  "aml-compliance": {
    "title": "AML & Compliance",
    "shortDescription": "Protect your business from financial crime risk",
    "description": "Practical AML/CFT programs that satisfy UAE regulatory expectations while integrating smoothly into your operations.",
    "subServices": {
      "aml-registration": {
        "title": "AML goAML registration",
        "description": "Designated non-financial businesses and professions must register on the UAE's goAML platform and report suspicious activity to the Financial Intelligence Unit. We handle initial registration, user setup, and configuration of reporting workflows within your organisation. Ongoing support ensures your filings remain current as regulations and FIU requirements evolve."
      },
      "policies": {
        "title": "Policies & procedures",
        "description": "A robust AML/CFT framework starts with tailored policies, risk assessments, and customer due diligence procedures aligned to your business activities. We draft policy manuals, define roles and responsibilities, and create checklists for onboarding, monitoring, and escalation of suspicious transactions. Staff training sessions ensure your team understands their obligations and can apply procedures in practice."
      },
      "outsourced": {
        "title": "Outsourced compliance officer",
        "description": "Many SMEs and professional firms need AML compliance oversight without the cost of a full-time compliance officer. We provide outsourced monitoring of transactions, periodic risk reviews, regulatory update briefings, and liaison with authorities when required. This gives you continuous compliance coverage while you focus on running your business."
      },
      "aup-audit": {
        "title": "AML assurance audits",
        "description": "Independent assurance testing verifies that your AML controls operate effectively and meet UAE Central Bank and Ministry of Economy expectations. We test customer due diligence files, transaction monitoring, record retention, and reporting procedures against your policies and regulatory standards. Findings are documented with actionable remediation steps to strengthen your compliance before a regulatory inspection."
      }
    }
  },
  "business-advisory": {
    "title": "Business Advisory",
    "shortDescription": "Strategic guidance for UAE market success",
    "description": "Beyond numbers — we help you navigate company formation, banking, attestations, and growth decisions in the UAE's dynamic business environment.",
    "subServices": {
      "ma": {
        "title": "Mergers & acquisitions support",
        "description": "We support buyers and sellers through the full M&A lifecycle — from initial financial due diligence and valuation to deal structuring and post-merger integration planning. Our analysis covers working capital adjustments, earn-out mechanisms, and tax implications of the transaction structure. Clear financial insight at each stage helps you negotiate better terms and avoid surprises after closing."
      },
      "bank-opening": {
        "title": "Corporate bank account opening",
        "description": "Opening a corporate bank account in the UAE requires carefully prepared documentation, a credible business plan, and often direct liaison with relationship managers. We compile KYC packs, source of funds explanations, and supporting financial projections tailored to each bank's requirements. Our guidance reduces rejection rates and speeds up the account opening process for mainland and free zone entities."
      },
      "feasibility": {
        "title": "Feasibility studies",
        "description": "Before committing capital to a new venture or market expansion, a feasibility study assesses financial viability, break-even timing, and key risk factors. We build revenue and cost models, analyse market assumptions, and stress-test scenarios to give you a realistic picture of potential returns. The output supports investor presentations, bank loan applications, and internal board approval."
      },
      "ubo": {
        "title": "UBO declaration filing",
        "description": "UAE entities must maintain accurate Ultimate Beneficial Owner registers and submit declarations to licensing authorities. We identify qualifying beneficial owners, prepare register entries, and file required notifications and updates when ownership changes. Staying compliant with UBO rules avoids licence renewal delays and penalties from regulatory authorities."
      },
      "attestation": {
        "title": "Document attestation",
        "description": "Legal and commercial documents often require attestation through UAE ministries, embassies, and consulates for use locally or abroad. We coordinate the full attestation chain — notarisation, MOFA attestation, and embassy legalisation — for certificates, contracts, powers of attorney, and corporate documents. This saves you time navigating multiple offices and tracking document status."
      },
      "ifrs": {
        "title": "IFRS transition advisory",
        "description": "Adopting IFRS — whether for the first time or after a framework change — requires gap analysis, policy development, and system adjustments. We assess differences between your current reporting basis and IFRS, design transition journals, and support first-time IFRS financial statement preparation. Our guidance ensures a smooth transition that satisfies auditors and stakeholders."
      },
      "trademark": {
        "title": "Trademark registration",
        "description": "Protecting your brand in the UAE starts with trademark registration through the Ministry of Economy. We conduct preliminary availability searches, prepare application documents, manage the filing process, and track renewal deadlines. Registration gives you legal rights to prevent unauthorised use of your name, logo, and brand elements in the UAE market."
      },
      "customs": {
        "title": "Customs registration",
        "description": "Businesses importing or exporting goods through UAE ports need a valid customs code and compliant registration with the Federal Authority for Identity, Citizenship, Customs and Port Security. We manage importer code applications, activity classification, and liaison with customs brokers. Proper registration ensures smooth clearance of shipments and avoids delays at border checkpoints."
      }
    }
  },
  "regulatory-tax": {
    "title": "Regulatory & Other Tax",
    "shortDescription": "Specialized UAE tax and regulatory services",
    "description": "Coverage for Economic Substance Regulations, excise tax, tax residency certificates, and FTA tax agent representation.",
    "subServices": {
      "esr": {
        "title": "Economic Substance Regulations",
        "description": "Entities carrying out relevant activities under UAE Economic Substance Regulations must file annual notifications and, where applicable, substance reports demonstrating adequate employees, expenditure, and decision-making in the UAE. We assess whether your entity is in scope, prepare notification and report filings, and advise on substance requirements to meet the test. Non-compliance can result in penalties and exchange of information with foreign tax authorities."
      },
      "excise": {
        "title": "Excise tax registration",
        "description": "Excise tax applies to specific goods such as tobacco, energy drinks, and carbonated beverages in the UAE. Importers, producers, and stockholders of excise goods must register with the FTA and file periodic returns. We handle registration, product classification, return preparation, and warehouse stock reconciliation to keep your excise obligations fully compliant."
      },
      "tax-residency": {
        "title": "Tax residency certificate",
        "description": "A UAE tax residency certificate confirms your tax domicile for treaty relief, foreign withholding tax claims, and bank due diligence requirements. We prepare the application, compile supporting evidence of substance and presence in the UAE, and coordinate submission to the FTA. Certificates are increasingly required for cross-border transactions and international tax planning."
      },
      "tax-agent": {
        "title": "FTA tax agent services",
        "description": "Registered tax agents can represent your business before the Federal Tax Authority for registrations, return amendments, refund applications, and dispute resolution. Acting as your authorised representative, we communicate with the FTA on your behalf, submit documents through the portal, and follow up on pending cases. This ensures professional handling of all tax authority interactions."
      }
    }
  }
} as Record<string, ServiceMessages>;
