import React from 'react';

interface AutomationProject {
  id: number;
  title: string;
  techStack: string[];
  points: string[];
}

interface AutomationProjectsProps {
  darkMode: boolean;
}

const AutomationProjects: React.FC<AutomationProjectsProps> = ({ darkMode }) => {
  const projects: AutomationProject[] = [
    {
      id: 1,
      title: "Relocation Workflow",
      techStack: ["n8n", "Airtable", "DocuSeal", "Xero"],
      points: [
        "Automates the full candidate relocation pipeline from initial intake through to invoicing",
        "Handles contract dispatch and e-signature, then updates CRM records once signed",
        "Supports multiple payment plan structures, each generating its own invoice schedule"
      ]
    },
    {
      id: 2,
      title: "Invoice PDF Attachment Fix",
      techStack: ["n8n", "Xero"],
      points: [
        "Post-deployment bug fix for the Relocation Workflow",
        "Restored a missing invoice PDF attachment on the candidate onboarding email",
        "Triggered by new payment plan routes that had been added shortly before"
      ]
    },
    {
      id: 3,
      title: "Relocation Follow-up Calendar",
      techStack: ["n8n", "Microsoft Outlook/365"],
      points: [
        "Automatically schedules a series of post-placement check-in reminders",
        "Spans roughly the candidate's first three months (Day 1 through Week 11)",
        "Keeps a support mailbox populated with calendar touchpoints so no candidate is missed"
      ]
    },
    {
      id: 4,
      title: "Overdue Invoice Reminder Workflow",
      techStack: ["n8n", "Airtable", "Microsoft Outlook/365"],
      points: [
        "Polls installment/invoice records daily for overdue status",
        "Automatically sends follow-up reminder emails on the accounts team's behalf",
        "Removes manual chasing of late payments from the finance workflow"
      ]
    },
    {
      id: 5,
      title: "Commission Workflow",
      techStack: ["n8n", "Airtable", "Xero Payroll"],
      points: [
        "Reads installment records to determine which commissions are due",
        "Calculates recruiter commission amounts and pushes them into payslips",
        "Also handles a flat marketing commission, gated to a set number of days after candidate start"
      ]
    },
    {
      id: 6,
      title: "Profit First Weekly Calculation Workflow",
      techStack: ["n8n", "Xero"],
      points: [
        "Automates a recurring weekly financial calculation using the Profit First method",
        "Pulls figures from accounting data rather than manual spreadsheet work",
        "Reduces manual finance admin for the accounts team"
      ]
    },
    {
      id: 7,
      title: "AutoCall Candidate Warm-up",
      techStack: ["n8n", "ClickFunnels", "AutoCall"],
      points: [
        "Captures new candidate leads coming through a funnel form",
        "Qualifies each lead against a set of screening criteria",
        "Splits leads into two routes: warm-up calling vs. nurture sequence"
      ]
    },
    {
      id: 8,
      title: "AutoCall Candidate Upgrade Workflow",
      techStack: ["n8n", "AutoCall (AI voice agents)"],
      points: [
        "Conducts outbound screening/warm-up phone calls using AI voice assistants",
        "Uses two distinct voice-assistant personas for different call scenarios",
        "Runs an AI classification step after each call to determine the outcome"
      ]
    },
    {
      id: 9,
      title: "Inbound Callback Agent",
      techStack: ["AutoCall (AI voice agent)", "Airtable"],
      points: [
        "Handles candidates who call back after receiving an outbound warm-up call",
        "Matches the caller to the correct candidate record using phone number matching",
        "Acts as the \"answering\" counterpart to the outbound warm-up flow"
      ]
    },
    {
      id: 10,
      title: "Opportunity Callback",
      techStack: ["n8n"],
      points: [
        "Re-engages candidates who have already been screened previously",
        "Triggers automatically when a new job opportunity matching their profile appears",
        "Runs as a separate process from the initial cold-calling flow"
      ]
    },
    {
      id: 11,
      title: "Police Checks Workflow",
      techStack: ["n8n", "Airtable", "Microsoft Outlook/365"],
      points: [
        "Listens for incoming criminal record check result emails",
        "Automatically links each result to the correct candidate record",
        "Closes the loop on a compliance step that previously required manual matching"
      ]
    },
    {
      id: 12,
      title: "Candidate Categorisation",
      techStack: ["n8n", "JobAdder", "GPT-5 mini"],
      points: [
        "Reads free-text \"current position\" data and maps it to a standard category list",
        "Runs as a daily sync to auto-categorise new and updated candidates",
        "Included a one-time backfill project to categorise all historical candidate records"
      ]
    },
    {
      id: 13,
      title: "Data Migration/Sync (Airtable → CRM)",
      techStack: ["n8n", "Airtable", "JobAdder"],
      points: [
        "Moves candidate, contact, and job records from a spreadsheet-style database into the main CRM",
        "Keeps records in sync so both systems don't need manual duplicate maintenance",
        "Standardises where recruitment data officially lives going forward"
      ]
    },
    {
      id: 14,
      title: "Director Task Automation",
      techStack: ["n8n", "Slack", "Trello", "Claude (AI)"],
      points: [
        "Reads a manager's chat message describing a task",
        "Uses AI to extract the assignee, due date, and any attached files",
        "Automatically creates a task card on the correct team member's board, supporting multiple assignees per message"
      ]
    },
    {
      id: 15,
      title: "Winning Ad Hooks Automation",
      techStack: ["n8n", "Meta Ads API", "OpenAI Whisper"],
      points: [
        "Pulls live ad performance data for ads currently in testing",
        "Uses speech-to-text to extract the \"hook\" from video ad creatives",
        "Applies fixed performance benchmarks to recommend promote / iterate / cut decisions weekly"
      ]
    },
    {
      id: 16,
      title: "Ads Data Sync",
      techStack: ["n8n", "Meta Ads API", "Airtable"],
      points: [
        "Runs a daily sync pulling ad-level performance data from the ads platform",
        "Feeds a shared tracking database used for downstream reporting",
        "Provides the raw numbers layer that other marketing automations build on"
      ]
    },
    {
      id: 17,
      title: "Client Outreach — Send CVs",
      techStack: ["n8n", "Airtable", "Microsoft Outlook/365"],
      points: [
        "Watches for new client leads coming through paid ads",
        "Matches available candidate CVs to the client's trade/industry",
        "Automatically emails a shortlist of up to three CVs directly to the client"
      ]
    },
    {
      id: 18,
      title: "Ads Analysis Daily Report",
      techStack: ["n8n", "Meta Ads API"],
      points: [
        "Aggregates spend, performance, and creative data across active ad accounts",
        "Compiles the data into a structured report format",
        "Distributes a daily digest to the marketing team"
      ]
    },
    {
      id: 19,
      title: "AI DM Reply Automation",
      techStack: ["n8n", "Claude (AI)", "Meta APIs"],
      points: [
        "Automatically replies to direct messages received on social platforms",
        "Uses AI to interpret and generate contextually relevant responses",
        "Reduces manual reply time on inbound social message volume"
      ]
    },
    {
      id: 20,
      title: "Messaging Platform Integration",
      techStack: ["Claude", "Model Context Protocol (MCP)", "Meta APIs"],
      points: [
        "Connects the AI assistant directly to social messaging platforms",
        "Provides the technical layer that enables the DM Reply Automation project",
        "Allows the assistant to read and send messages programmatically"
      ]
    },
    {
      id: 21,
      title: "Monitoring Dashboard",
      techStack: ["Grafana", "n8n", "Slack"],
      points: [
        "Provides a single view over the health of all automated workflows",
        "Tracks execution success/failure rates and error volumes",
        "Sends alerts into Slack when priority workflows fail"
      ]
    },
    {
      id: 22,
      title: "Email Outage Fix",
      techStack: ["DNS (MX/SPF/DKIM records)", "Microsoft 365", "Hostinger"],
      points: [
        "Diagnosed a company-wide email outage affecting inbound and outbound mail",
        "Traced the root cause to DNS records being overwritten during a website migration",
        "Restored correct email routing records to resolve the outage"
      ]
    },
    {
      id: 23,
      title: "Claude Code Adoption",
      techStack: ["Claude Code"],
      points: [
        "Drives structured adoption of AI-assisted coding/automation tooling within the team",
        "Targets recruitment workflows involving candidate data and pipeline movement",
        "Aims to make tooling gains stick across the team rather than staying with individual users"
      ]
    }
  ];

  return (
    <section
      id="automations"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Automation Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            IT/Automation department projects built to remove manual work from recruitment,
            finance, marketing, and compliance workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow'
              }`}
            >
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className={`space-y-2 text-sm list-disc list-inside ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationProjects;
