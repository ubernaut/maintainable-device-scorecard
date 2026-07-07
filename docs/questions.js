window.scorecardQuestions = [
  {
    category: "Configuration & Operations",
    question:
      "Can the device be configured with human readable text files that can be deployed in an automated way?",
    help: {
      why:
        "Long-lived devices need configuration that can be reviewed, backed up, diffed, templated, and restored years later. Human readable files make support less dependent on memory, screenshots, or a vendor-only tool.",
      matters:
        "This matters most for fleets, remote deployments, regulated environments, or any device that may need repeatable rebuilds after failure.",
      mayNotMatter:
        "It may matter less for a one-off device with a stable setup, low security exposure, and no expectation of automated replacement or audit.",
    },
  },
  {
    category: "Configuration & Operations",
    question: "Can the device be configured over SSH?",
    help: {
      why:
        "SSH gives maintainers a standard remote access path for troubleshooting, scripted changes, and emergency recovery. It reduces dependence on local presence or special vendor applications.",
      matters:
        "This matters most when devices are remote, hard to reach, or managed by automation tools such as Ansible.",
      mayNotMatter:
        "It may matter less for devices that are always physically accessible, have another secure management channel, or should never expose shell-level access.",
    },
  },
  {
    category: "Configuration & Operations",
    question:
      "Can the device be configured over a web interface hosted directly on the device?",
    help: {
      why:
        "A local web interface provides a broadly available fallback for setup and diagnostics. It can keep maintenance possible even when vendor desktop tools, cloud portals, or mobile apps are unavailable.",
      matters:
        "This matters most during field work, initial provisioning, isolated-network operation, or troubleshooting by people who do not have specialized tooling.",
      mayNotMatter:
        "It may matter less if the device has a better documented local API or CLI and operators are comfortable using those tools.",
    },
  },
  {
    category: "Configuration & Operations",
    question:
      "Can configurations be deployed to a fleet of devices en-masse?",
    help: {
      why:
        "Fleet deployment prevents configuration drift and makes large changes practical. Long-term maintenance often requires applying new standards, credentials, endpoints, or security settings across many devices.",
      matters:
        "This matters most when you operate many devices, support geographically distributed sites, or need to respond quickly to compliance or security changes.",
      mayNotMatter:
        "It may matter less for a small number of devices with stable settings and low cost of manual administration.",
    },
  },
  {
    category: "Configuration & Operations",
    question:
      "Can configurations be deployed to a device through a highly automated and simple provisioning process?",
    help: {
      why:
        "Simple provisioning lowers the chance of mistakes when installing, replacing, or rebuilding a device. It also makes future staff less dependent on undocumented tribal knowledge.",
      matters:
        "This matters most when devices are replaced in the field, installed by different teams, or need to recover quickly after hardware failure.",
      mayNotMatter:
        "It may matter less for devices that are configured once in a controlled lab and are unlikely to be rebuilt or replaced.",
    },
  },
  {
    category: "Configuration & Operations",
    question:
      "Can the device run self tests and roll back configurations that fail?",
    help: {
      why:
        "Rollback protects long-term remote support by reducing the risk that a bad change permanently breaks access or function. It makes updates safer as requirements evolve.",
      matters:
        "This matters most when site visits are expensive, outages are costly, or configuration changes must be made remotely.",
      mayNotMatter:
        "It may matter less for noncritical devices that are easy to access physically and can be manually recovered without much cost.",
    },
  },
  {
    category: "Configuration & Operations",
    question:
      "Does this device require you to install a mobile app to configure or manage it?",
    help: {
      why:
        "Mobile-app-only management can become a long-term maintenance risk because apps disappear, lose OS support, require vendor accounts, or conflict with future security policy.",
      matters:
        "This matters most for devices expected to last many years, devices managed by organizations with strict mobile policies, or devices deployed where app stores are unavailable.",
      mayNotMatter:
        "It may matter less for consumer-style devices with short replacement cycles or when the app is only an optional convenience over standard local controls.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Is there an open or available API with documentation for end user use?",
    help: {
      why:
        "A documented API makes the device easier to integrate, monitor, automate, and troubleshoot over time. It reduces the risk that future workflows depend on fragile reverse engineering.",
      matters:
        "This matters most when the device must integrate with dashboards, alerting, inventory, compliance, or custom operational systems.",
      mayNotMatter:
        "It may matter less for simple standalone devices whose value does not depend on integration or remote observability.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "If the device supports authentication, can it be configured to use a domain authenticator or OAuth?",
    help: {
      why:
        "Central authentication makes account lifecycle, access reviews, and password policy maintainable. It avoids shared local accounts that become a security and audit problem over time.",
      matters:
        "This matters most for multi-user administration, regulated environments, staff turnover, or systems exposed to wider networks.",
      mayNotMatter:
        "It may matter less for isolated single-user devices with no sensitive access and a clear process for local credential rotation.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device produce data for its primary function in a standard format (JSON, CSV, XML etc.) or provide documentation for parsing their custom format? Full credit for human readable standard formats.",
    help: {
      why:
        "Standard or documented data formats keep historical data usable as tools change. They also make migration, analytics, and troubleshooting possible without depending on one vendor application.",
      matters:
        "This matters most when device output must be archived, exchanged, audited, analyzed, or integrated with future systems.",
      mayNotMatter:
        "It may matter less if the device produces no useful external data or if the data has no long-term operational value.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does the device send data to the manufacturer or third parties?",
    help: {
      why:
        "Outbound data flows affect privacy, security approval, network design, and long-term trust. They can also create hidden dependencies if the device assumes vendor connectivity.",
      matters:
        "This matters most for sensitive sites, regulated data, restricted networks, or organizations that must document external data sharing.",
      mayNotMatter:
        "It may matter less for public, nonsensitive telemetry where the organization explicitly accepts the data flow and dependency.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device depend on remote/cloud infrastructure for operation?",
    help: {
      why:
        "Cloud dependencies can turn a working physical device into an unusable one when internet access, vendor services, accounts, or pricing change. Long-term maintenance needs to account for that external risk.",
      matters:
        "This matters most for critical functions, disconnected sites, remote areas, or devices expected to remain useful after vendor priorities change.",
      mayNotMatter:
        "It may matter less for noncritical devices that are easy to replace or whose primary purpose is inherently cloud-based.",
    },
  },
  {
    category: "APIs, Identity & Data Flow",
    question:
      "Does this device depend on cloud infrastructure the end user cannot control, replace, or run on their own?",
    help: {
      why:
        "Uncontrollable infrastructure is a long-term lock-in risk. If the vendor shuts it down or changes behavior, the end user may have no practical way to keep the device operating.",
      matters:
        "This matters most for long service lifetimes, mission-critical deployments, and devices that would be expensive to replace before the hardware fails.",
      mayNotMatter:
        "It may matter less when the device has a short planned life, an acceptable fallback mode, or a service contract that clearly covers the dependency.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Is the operating system, firmware, or software it runs open source?",
    help: {
      why:
        "Open source software can be inspected, patched, rebuilt, or supported by parties other than the original vendor. That gives maintainers more options when requirements change.",
      matters:
        "This matters most for long-lived or security-sensitive devices where vendor abandonment would create operational risk.",
      mayNotMatter:
        "It may matter less when the vendor has strong support commitments, the device is not networked, or the expected service life is short.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Are there any proprietary software or drivers that are necessary for regular operation?",
    help: {
      why:
        "Required proprietary components can block OS upgrades, security patches, or hardware replacements. They often become the weak point in long-term maintainability.",
      matters:
        "This matters most when the device depends on host computers, drivers, browser plugins, vendor runtimes, or specialized update tools.",
      mayNotMatter:
        "It may matter less if the proprietary component is embedded, well supported for the full device lifetime, and not tied to changing external platforms.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "If so, what is the long term support commitment for updating the proprietary software for new operating systems and security patches?",
    help: {
      why:
        "A support commitment tells you whether required closed components will remain secure and usable. Without it, maintenance planning is guesswork.",
      matters:
        "This matters most when proprietary software is required for operation, configuration, updates, data access, or compliance.",
      mayNotMatter:
        "It may matter less if proprietary software is optional, replaceable, or only needed during a one-time commissioning process.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Can the firmware/software be obtained under another license/agreement on condition of NDA or similar legal agreement?",
    help: {
      why:
        "Alternate access can provide a last-resort path for debugging, recovery, or continued support if normal vendor channels fail. It can reduce abandonment risk for critical systems.",
      matters:
        "This matters most for high-value, specialized, or safety-related devices where replacement is difficult and support continuity is essential.",
      mayNotMatter:
        "It may matter less for commodity devices that are inexpensive to replace or where source-level access would not realistically be used.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Can the firmware and/or software be deployed and updated by the user?",
    help: {
      why:
        "User-controlled updates make security patching and bug fixes possible on your schedule. They also reduce dependence on vendor service visits or device replacement.",
      matters:
        "This matters most for networked devices, remote sites, or any environment where new vulnerabilities may require prompt remediation.",
      mayNotMatter:
        "It may matter less for isolated appliances with fixed function, low exposure, and a replacement strategy that does not rely on patching.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "Does this device run a standard operating system that can be patched, upgraded, and modified by the end user? Think security patching or configuration; Debian or Ubuntu would get top marks.",
    help: {
      why:
        "A standard OS gives maintainers familiar tools, patch processes, logging, automation, and security controls. It makes the device easier to keep aligned with future organizational requirements.",
      matters:
        "This matters most when the device is networked, integrated with enterprise systems, or expected to follow changing security baselines.",
      mayNotMatter:
        "It may matter less for simple embedded devices with minimal attack surface and no need for OS-level customization.",
    },
  },
  {
    category: "Software & Firmware Lifecycle",
    question:
      "What is the typical support lifetime by the manufacturer for software updates?",
    help: {
      why:
        "Support lifetime determines when the device may become a security or maintenance liability. It helps align purchase decisions with the intended service life.",
      matters:
        "This matters most when devices are expensive, remote, regulated, or planned to operate for many years before replacement.",
      mayNotMatter:
        "It may matter less for disposable, offline, or short-lived devices that will be retired before updates stop.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Can the device be repaired or upgraded with modular electronic components?",
    help: {
      why:
        "Modular repair makes it possible to replace failing parts without discarding the whole device. It reduces downtime, waste, and lifecycle cost.",
      matters:
        "This matters most for remote installations, expensive hardware, harsh environments, or devices expected to outlive individual components.",
      mayNotMatter:
        "It may matter less for low-cost sealed devices where replacement is faster and cheaper than repair.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does the device use an open source hardware specification? For example, RISC-V.",
    help: {
      why:
        "Open hardware specifications can improve transparency, reduce lock-in, and support alternate sourcing or future repair. They can also make security review easier.",
      matters:
        "This matters most when supply chain trust, long-term availability, custom builds, or independent verification are important.",
      mayNotMatter:
        "It may matter less when hardware is commodity, easily replaceable, and not part of a sensitive trust boundary.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does the manufacturer publish the MTBF (mean time before failure)?",
    help: {
      why:
        "Reliability data helps estimate spares, service intervals, and replacement budgets. It turns maintenance planning from guesswork into risk management.",
      matters:
        "This matters most for large fleets, remote sites, safety-impacting devices, or systems where failures are expensive.",
      mayNotMatter:
        "It may matter less for noncritical devices where failure is obvious, cheap, and easy to correct.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question: "Does the device have a secure supply chain?",
    help: {
      why:
        "Supply chain security affects whether hardware and software can be trusted throughout the device lifetime. Compromised components can create risks that are hard to detect later.",
      matters:
        "This matters most for sensitive networks, critical infrastructure, regulated environments, or devices with privileged access.",
      mayNotMatter:
        "It may matter less for low-risk, isolated devices that do not process sensitive data or connect to important systems.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Are CAD files or detailed hardware specs available to support modifications and repair?",
    help: {
      why:
        "Detailed hardware information helps future maintainers build mounts, enclosures, replacement parts, and repair procedures. It keeps the device adaptable after the original project team moves on.",
      matters:
        "This matters most for custom installations, harsh environments, remote sites, or devices that may need mechanical adaptation over time.",
      mayNotMatter:
        "It may matter less for standard off-the-shelf devices that are mounted and replaced without modification.",
    },
  },
  {
    category: "Hardware, Supply Chain & Documentation",
    question:
      "Does documentation exist for each of the relevant items above?",
    help: {
      why:
        "Documentation is what makes maintainability transferable. It lets future staff understand, audit, repair, and operate the device without rediscovering how it works.",
      matters:
        "This matters most for long service lifetimes, staff turnover, regulated operations, or systems that may be inherited by another team.",
      mayNotMatter:
        "It may matter less for simple disposable devices with no meaningful configuration, integration, or repair path.",
    },
  },
];
