questions = JSON.parse`[
  { "question": "Open API with documentation?" },
  {
    "question": "Can the device be configured with human readable text files that can be managed independently? "
  },
  { "question": "Can the device be configured over SSH?" },
  {
    "question": "Can the device be configured over a web interface hosted directly on the device? "
  },
  {
    "question": "Can configurations be deployed to a fleet of devices en-masse? "
  },
  {
    "question": "Can configureations be deployed to a device through a simple provisioning process?"
  },
  {
    "question": "Can the device run self tests and roll back configurations that fail? "
  },
  {
    "question": "If the device supports authentication, can it be configured to use a domain authenticator/ oauth? "
  },
  {
    "question": "Does this device produce data in a standard format (JSON, CSV, XML etc.) or provide documentation for parsing their custom format? (full credit for human readable standard formats)"
  },
  { "question": "Open Source firmware and/or software? " },
  {
    "question": "Can the firmware/software be obtained under another license/agreement on condition of NDA or similar legal agreement?"
  },
  {
    "question": "Firmware and/or software that can be deployed and updated by the user."
  },
  {
    "question": "Does the device send data to the manufacturer or third parties?"
  },
  {
    "question": "Does this device depend on remote/cloud infrastructure for operation?"
  },
  {
    "question": "Does this device depend on cloud infrastructure the end user cannot control, replace, or run on their own? (0-9)"
  },
  {
    "question": "Does this device require you to install a mobile app to configure or manage it? ( 0-9) "
  },
  {
    "question": "Can the device be repaired or upgraded with modular electronic components?"
  },
  {
    "question": "Does this device run a standard operating system that can be patched, upgraded, and modified by the end user (think security patching or configuration)? "
  },
  { "question": "Open Source hardware specification (think RISC V)" },
  {
    "question": "What is the typical support lifetime by the manufacturer for software updates?"
  },
  {
    "question": "Does the manufacturer publish the MTBF (mean time before failure)? "
  },
  { "question": "Does the device have a secure supply chain?" },
  {
    "question": "Are cad files or detailed hardware specs available to support modifications and repair?"
  },
  {
    "question": "Does documentation exist for each of the relevant items above?"
  }
]`;
