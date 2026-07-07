window.scorecardQuestions = [
  {
    category: "Configuration & Operations",
    question:
      "Can the device be configured with human readable text files that can be deployed in an automated way?",
    help:
      "This matters when you need repeatable setup, code review, backups, or disaster recovery. Text-based configuration is easier to diff, audit, template, and redeploy across many devices than settings trapped in a vendor tool.",
  },
  {
    category: "Configuration & Operations",
    question: "Can the device be configured over SSH?",
    help:
      "SSH support is important for remote maintenance, automation, and emergency access in constrained environments. It also makes configuration possible without a proprietary desktop or mobile application.",
  },
  {
    category: "Configuration & Operations",
    question:
      "Can the device be configured over a web interface hosted directly on the device?",
    help:
      "A local web interface helps when technicians or operators need a familiar setup path without special software. It is especially useful during field work, network isolation, or initial provisioning.",
  },
  {
    category: "Configuration & Operations",
    question:
      "Can configurations be deployed to a fleet of devices en-masse?",
    help:
      "Fleet deployment matters when you operate more devices than people can reasonably touch one at a time. It reduces drift, saves labor, and makes security or compliance changes practical.",
  },
  {
    category: "Configuration & Operations",
    question:
      "Can configurations be deployed to a device through a highly automated and simple provisioning process?",
    help:
      "Simple provisioning reduces mistakes during installation, replacement, and recovery. It is important when devices are remote, installed by different people, or need to be rebuilt quickly.",
  },
  {
    category: "Configuration & Operations",
    question:
      "Can the device run self tests and roll back configurations that fail?",
    help:
      "Self tests and rollback reduce the risk of remotely disabling a device. This is critical when a bad configuration could require an expensive site visit or cause an outage.",
  },
  {
    category: "Configuration & Operations",
    question:
      "Does this device require you to install a mobile app to configure or manage it?",
    help:
      "Mobile-app-only management can become a long-term support risk. Apps may disappear, lose operating system support, require accounts, or become unusable under future security policies.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Is there an open or available API with documentation for end user use?",
    help:
      "An API makes the device easier to integrate, monitor, automate, and troubleshoot. Documentation matters because unsupported or reverse-engineered integrations are fragile over a long service life.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "If the device supports authentication, can it be configured to use a domain authenticator or OAuth?",
    help:
      "Central authentication helps enforce account lifecycle, access review, and security policy. It becomes important when shared local passwords are unacceptable or staff turnover is frequent.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device produce data for its primary function in a standard format (JSON, CSV, XML etc.) or provide documentation for parsing their custom format? Full credit for human readable standard formats.",
    help:
      "Standard data formats make the device easier to integrate with future systems. This is important when data must be archived, analyzed, migrated, or used by tools that do not exist yet.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does the device send data to the manufacturer or third parties?",
    help:
      "Outbound data flows affect privacy, security reviews, network approvals, and long-term trust. You need to know what leaves your environment before deployment, especially for sensitive locations or regulated data.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device depend on remote/cloud infrastructure for operation?",
    help:
      "Cloud dependencies can create outages when the internet, vendor service, or account relationship changes. This is important for devices that must keep working in remote or disconnected conditions.",
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device depend on cloud infrastructure the end user cannot control, replace, or run on their own?",
    help:
      "Uncontrollable cloud services are a major lifetime risk. If the vendor shuts down, changes pricing, or removes features, the device may degrade even when the hardware still works.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Is the operating system, firmware, or software it runs open source?",
    help:
      "Open source software can be inspected, patched, forked, and supported after a vendor loses interest. It is most important when devices are expected to remain in service for many years.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Are there any proprietary software or drivers that are necessary for regular operation?",
    help:
      "Required proprietary components can block upgrades and repairs. This matters when operating systems change, security standards evolve, or vendor support ends.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "If so, what is the long term support commitment for updating the proprietary software for new operating systems and security patches?",
    help:
      "A support commitment tells you whether required proprietary pieces will remain usable and secure. It is important before depending on a vendor component that you cannot maintain yourself.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Can the firmware/software be obtained under another license/agreement on condition of NDA or similar legal agreement?",
    help:
      "Escrow, NDA access, or alternate licensing can provide a last-resort path when normal support fails. It matters for critical systems where abandonment would be costly.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Can the firmware and/or software be deployed and updated by the user?",
    help:
      "User-managed updates are necessary for security patching and long-term maintenance. Without them, every fix depends on vendor process, vendor availability, or physical replacement.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Does this device run a standard operating system that can be patched, upgraded, and modified by the end user? Think security patching or configuration; Debian or Ubuntu would get top marks.",
    help:
      "A standard operating system gives your team familiar maintenance tools and a predictable security model. It matters when compliance requirements change after the device is deployed.",
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "What is the typical support lifetime by the manufacturer for software updates?",
    help:
      "Support lifetime helps estimate when the device will become a security or maintenance liability. It is important for lifecycle planning, budgeting, and avoiding surprise refreshes.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Can the device be repaired or upgraded with modular electronic components?",
    help:
      "Modular repair reduces downtime and replacement cost. It matters when devices are remote, expensive to replace, or expected to survive multiple generations of surrounding infrastructure.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does the device use an open source hardware specification? For example, RISC-V.",
    help:
      "Open hardware specifications can reduce lock-in and improve long-term transparency. This is most important when supply chain trust, repairability, or future manufacturing options matter.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does the manufacturer publish the MTBF (mean time before failure)?",
    help:
      "MTBF data helps estimate spares, replacement schedules, and operational risk. It matters when failures are expensive, remote, or disruptive to service.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question: "Does the device have a secure supply chain?",
    help:
      "Supply chain confidence affects whether the hardware and software can be trusted. It is important for security-sensitive environments and for devices that may be difficult to inspect after installation.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Are CAD files or detailed hardware specs available to support modifications and repair?",
    help:
      "Detailed hardware information makes custom mounts, repairs, enclosures, and field modifications easier. It matters when devices must fit unusual locations or remain serviceable after vendor support ends.",
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does documentation exist for each of the relevant items above?",
    help:
      "Documentation is what turns a capability into something your team can actually rely on. It is important for onboarding, audits, troubleshooting, and maintaining the device years after purchase.",
  },
];
