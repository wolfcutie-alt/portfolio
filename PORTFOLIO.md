# IT / Automation Department — Projects

> Compiled from Arkon's wiki index. Full detail pages are restricted to the Automation department, so some specifics may be incomplete.

## Relocation Workflow
**Tech stack:** n8n, Airtable, DocuSeal, Xero
- Automates the full candidate relocation pipeline from initial intake through to invoicing
- Handles contract dispatch and e-signature, then updates CRM records once signed
- Supports multiple payment plan structures, each generating its own invoice schedule

## Invoice PDF Attachment Fix
**Tech stack:** n8n, Xero
- Post-deployment bug fix for the Relocation Workflow
- Restored a missing invoice PDF attachment on the candidate onboarding email
- Triggered by new payment plan routes that had been added shortly before

## Relocation Follow-up Calendar
**Tech stack:** n8n, Microsoft Outlook/365
- Automatically schedules a series of post-placement check-in reminders
- Spans roughly the candidate's first three months (Day 1 through Week 11)
- Keeps a support mailbox populated with calendar touchpoints so no candidate is missed

## Overdue Invoice Reminder Workflow
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Polls installment/invoice records daily for overdue status
- Automatically sends follow-up reminder emails on the accounts team's behalf
- Removes manual chasing of late payments from the finance workflow

## Commission Workflow
**Tech stack:** n8n, Airtable, Xero Payroll
- Reads installment records to determine which commissions are due
- Calculates recruiter commission amounts and pushes them into payslips
- Also handles a flat marketing commission, gated to a set number of days after candidate start

## Profit First Weekly Calculation Workflow
**Tech stack:** n8n, Xero
- Automates a recurring weekly financial calculation using the Profit First method
- Pulls figures from accounting data rather than manual spreadsheet work
- Reduces manual finance admin for the accounts team

## AutoCall Candidate Warm-up
**Tech stack:** n8n, ClickFunnels, AutoCall
- Captures new candidate leads coming through a funnel form
- Qualifies each lead against a set of screening criteria
- Splits leads into two routes: warm-up calling vs. nurture sequence

## AutoCall Candidate Upgrade Workflow
**Tech stack:** n8n, AutoCall (AI voice agents)
- Conducts outbound screening/warm-up phone calls using AI voice assistants
- Uses two distinct voice-assistant personas for different call scenarios
- Runs an AI classification step after each call to determine the outcome

## Inbound Callback Agent
**Tech stack:** AutoCall (AI voice agent), Airtable
- Handles candidates who call back after receiving an outbound warm-up call
- Matches the caller to the correct candidate record using phone number matching
- Acts as the "answering" counterpart to the outbound warm-up flow

## Opportunity Callback
**Tech stack:** n8n
- Re-engages candidates who have already been screened previously
- Triggers automatically when a new job opportunity matching their profile appears
- Runs as a separate process from the initial cold-calling flow

## Police Checks Workflow
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Listens for incoming criminal record check result emails
- Automatically links each result to the correct candidate record
- Closes the loop on a compliance step that previously required manual matching

## Candidate Categorisation
**Tech stack:** n8n, JobAdder, GPT-5 mini
- Reads free-text "current position" data and maps it to a standard category list
- Runs as a daily sync to auto-categorise new and updated candidates
- Included a one-time backfill project to categorise all historical candidate records

## Data Migration/Sync (Airtable → CRM)
**Tech stack:** n8n, Airtable, JobAdder
- Moves candidate, contact, and job records from a spreadsheet-style database into the main CRM
- Keeps records in sync so both systems don't need manual duplicate maintenance
- Standardises where recruitment data officially lives going forward

## Director Task Automation
**Tech stack:** n8n, Slack, Trello, Claude (AI)
- Reads a manager's chat message describing a task
- Uses AI to extract the assignee, due date, and any attached files
- Automatically creates a task card on the correct team member's board, supporting multiple assignees per message

## Winning Ad Hooks Automation
**Tech stack:** n8n, Meta Ads API, OpenAI Whisper
- Pulls live ad performance data for ads currently in testing
- Uses speech-to-text to extract the "hook" from video ad creatives
- Applies fixed performance benchmarks to recommend promote / iterate / cut decisions weekly

## Ads Data Sync
**Tech stack:** n8n, Meta Ads API, Airtable
- Runs a daily sync pulling ad-level performance data from the ads platform
- Feeds a shared tracking database used for downstream reporting
- Provides the raw numbers layer that other marketing automations build on

## Client Outreach — Send CVs
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Watches for new client leads coming through paid ads
- Matches available candidate CVs to the client's trade/industry
- Automatically emails a shortlist of up to three CVs directly to the client

## Ads Analysis Daily Report
**Tech stack:** n8n, Meta Ads API
- Aggregates spend, performance, and creative data across active ad accounts
- Compiles the data into a structured report format
- Distributes a daily digest to the marketing team

## AI DM Reply Automation
**Tech stack:** n8n, Claude (AI), Meta APIs
- Automatically replies to direct messages received on social platforms
- Uses AI to interpret and generate contextually relevant responses
- Reduces manual reply time on inbound social message volume

## Messaging Platform Integration
**Tech stack:** Claude, Model Context Protocol (MCP), Meta APIs
- Connects the AI assistant directly to social messaging platforms
- Provides the technical layer that enables the DM Reply Automation project
- Allows the assistant to read and send messages programmatically

## Monitoring Dashboard
**Tech stack:** Grafana, n8n, Slack
- Provides a single view over the health of all automated workflows
- Tracks execution success/failure rates and error volumes
- Sends alerts into Slack when priority workflows fail

## Email Outage Fix
**Tech stack:** DNS (MX/SPF/DKIM records), Microsoft 365, Hostinger
- Diagnosed a company-wide email outage affecting inbound and outbound mail
- Traced the root cause to DNS records being overwritten during a website migration
- Restored correct email routing records to resolve the outage

## Claude Code Adoption
**Tech stack:** Claude Code
- Drives structured adoption of AI-assisted coding/automation tooling within the team
- Targets recruitment workflows involving candidate data and pipeline movement
- Aims to make tooling gains stick across the team rather than staying with individual users# IT / Automation Department — Projects

> Compiled from Arkon's wiki index. Full detail pages are restricted to the Automation department, so some specifics may be incomplete.

## Relocation Workflow
**Tech stack:** n8n, Airtable, DocuSeal, Xero
- Automates the full candidate relocation pipeline from initial intake through to invoicing
- Handles contract dispatch and e-signature, then updates CRM records once signed
- Supports multiple payment plan structures, each generating its own invoice schedule

## Invoice PDF Attachment Fix
**Tech stack:** n8n, Xero
- Post-deployment bug fix for the Relocation Workflow
- Restored a missing invoice PDF attachment on the candidate onboarding email
- Triggered by new payment plan routes that had been added shortly before

## Relocation Follow-up Calendar
**Tech stack:** n8n, Microsoft Outlook/365
- Automatically schedules a series of post-placement check-in reminders
- Spans roughly the candidate's first three months (Day 1 through Week 11)
- Keeps a support mailbox populated with calendar touchpoints so no candidate is missed

## Overdue Invoice Reminder Workflow
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Polls installment/invoice records daily for overdue status
- Automatically sends follow-up reminder emails on the accounts team's behalf
- Removes manual chasing of late payments from the finance workflow

## Commission Workflow
**Tech stack:** n8n, Airtable, Xero Payroll
- Reads installment records to determine which commissions are due
- Calculates recruiter commission amounts and pushes them into payslips
- Also handles a flat marketing commission, gated to a set number of days after candidate start

## Profit First Weekly Calculation Workflow
**Tech stack:** n8n, Xero
- Automates a recurring weekly financial calculation using the Profit First method
- Pulls figures from accounting data rather than manual spreadsheet work
- Reduces manual finance admin for the accounts team

## AutoCall Candidate Warm-up
**Tech stack:** n8n, ClickFunnels, AutoCall
- Captures new candidate leads coming through a funnel form
- Qualifies each lead against a set of screening criteria
- Splits leads into two routes: warm-up calling vs. nurture sequence

## AutoCall Candidate Upgrade Workflow
**Tech stack:** n8n, AutoCall (AI voice agents)
- Conducts outbound screening/warm-up phone calls using AI voice assistants
- Uses two distinct voice-assistant personas for different call scenarios
- Runs an AI classification step after each call to determine the outcome

## Inbound Callback Agent
**Tech stack:** AutoCall (AI voice agent), Airtable
- Handles candidates who call back after receiving an outbound warm-up call
- Matches the caller to the correct candidate record using phone number matching
- Acts as the "answering" counterpart to the outbound warm-up flow

## Opportunity Callback
**Tech stack:** n8n
- Re-engages candidates who have already been screened previously
- Triggers automatically when a new job opportunity matching their profile appears
- Runs as a separate process from the initial cold-calling flow

## Police Checks Workflow
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Listens for incoming criminal record check result emails
- Automatically links each result to the correct candidate record
- Closes the loop on a compliance step that previously required manual matching

## Candidate Categorisation
**Tech stack:** n8n, JobAdder, GPT-5 mini
- Reads free-text "current position" data and maps it to a standard category list
- Runs as a daily sync to auto-categorise new and updated candidates
- Included a one-time backfill project to categorise all historical candidate records

## Data Migration/Sync (Airtable → CRM)
**Tech stack:** n8n, Airtable, JobAdder
- Moves candidate, contact, and job records from a spreadsheet-style database into the main CRM
- Keeps records in sync so both systems don't need manual duplicate maintenance
- Standardises where recruitment data officially lives going forward

## Director Task Automation
**Tech stack:** n8n, Slack, Trello, Claude (AI)
- Reads a manager's chat message describing a task
- Uses AI to extract the assignee, due date, and any attached files
- Automatically creates a task card on the correct team member's board, supporting multiple assignees per message

## Winning Ad Hooks Automation
**Tech stack:** n8n, Meta Ads API, OpenAI Whisper
- Pulls live ad performance data for ads currently in testing
- Uses speech-to-text to extract the "hook" from video ad creatives
- Applies fixed performance benchmarks to recommend promote / iterate / cut decisions weekly

## Ads Data Sync
**Tech stack:** n8n, Meta Ads API, Airtable
- Runs a daily sync pulling ad-level performance data from the ads platform
- Feeds a shared tracking database used for downstream reporting
- Provides the raw numbers layer that other marketing automations build on

## Client Outreach — Send CVs
**Tech stack:** n8n, Airtable, Microsoft Outlook/365
- Watches for new client leads coming through paid ads
- Matches available candidate CVs to the client's trade/industry
- Automatically emails a shortlist of up to three CVs directly to the client

## Ads Analysis Daily Report
**Tech stack:** n8n, Meta Ads API
- Aggregates spend, performance, and creative data across active ad accounts
- Compiles the data into a structured report format
- Distributes a daily digest to the marketing team

## AI DM Reply Automation
**Tech stack:** n8n, Claude (AI), Meta APIs
- Automatically replies to direct messages received on social platforms
- Uses AI to interpret and generate contextually relevant responses
- Reduces manual reply time on inbound social message volume

## Messaging Platform Integration
**Tech stack:** Claude, Model Context Protocol (MCP), Meta APIs
- Connects the AI assistant directly to social messaging platforms
- Provides the technical layer that enables the DM Reply Automation project
- Allows the assistant to read and send messages programmatically

## Monitoring Dashboard
**Tech stack:** Grafana, n8n, Slack
- Provides a single view over the health of all automated workflows
- Tracks execution success/failure rates and error volumes
- Sends alerts into Slack when priority workflows fail

## Email Outage Fix
**Tech stack:** DNS (MX/SPF/DKIM records), Microsoft 365, Hostinger
- Diagnosed a company-wide email outage affecting inbound and outbound mail
- Traced the root cause to DNS records being overwritten during a website migration
- Restored correct email routing records to resolve the outage

## Claude Code Adoption
**Tech stack:** Claude Code
- Drives structured adoption of AI-assisted coding/automation tooling within the team
- Targets recruitment workflows involving candidate data and pipeline movement
- Aims to make tooling gains stick across the team rather than staying with individual users

## Personal Portfolio Website
**Tech stack:** React, TypeScript, Vite, Tailwind CSS
- Single-page personal portfolio site (Hero, About, Skills, Projects, Contact) showcasing background, resume, and social links
- Implements light/dark mode with system-preference detection and localStorage persistence
- Animated typewriter effect for rotating hero taglines, plus skill-rating progress bars and categorized skill cards
