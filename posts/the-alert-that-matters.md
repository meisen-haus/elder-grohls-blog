---
title: "The Alert That Matters"
date: "2026-04-22T00:00:00"
author: "Nick Meisenheimer"
excerpt: "Getting the right information to the right person at the right time. Every word in that sentence is load-bearing."
---

I've been on teams that had too many alerts. The kind where your Slack has a channel called `#alerts-production` that moves fast enough that nobody reads it anymore, and real incidents get caught because someone happened to notice a spike in the error rate while looking at something else.

I've also seen the other failure mode: teams with no alerting infrastructure at all, where production incidents are discovered by customers or by whoever happened to be watching a dashboard at the right moment.

Both are bad. The first is bad in a way that's easy to miss — it looks like alerting, it has all the infrastructure of alerting, but the signal-to-noise ratio has decayed to the point where the alerts themselves have become invisible. Getting alerting right is harder than it sounds. The goal is getting the right information to the right person at the right time. Every word in that sentence is load-bearing.

## What Sentry Alerts Do

Alerts in Sentry are the response layer. They take issues — which are created and updated by Monitors and error detection — and translate them into actions. An alert doesn't detect a problem; it acts on one.

The core abstraction is an **alert rule**: a configuration that says "when an issue matches this condition, do this." The conditions are flexible enough to cover most real-world cases. The actions are where things get interesting — Slack, email, PagerDuty, webhooks, Jira tickets. The plumbing for getting the right notification to the right place is all there.

Sentry supports four alert types:

**Issue Alerts** fire when project issues match criteria you define. A new issue appears for the first time. An issue that was previously resolved comes back. An issue starts occurring frequently enough that it warrants escalation. These are the bread-and-butter alerts for most teams.

**Metric Alerts** activate when aggregate metrics cross thresholds you care about — total error count, latency at a given percentile, failure rate, crash-free session rate. These catch degradation that doesn't manifest as individual errors but shows up in the numbers.

**Uptime Alerts** fire when HTTP checks fail. If you've configured uptime monitors for the services you depend on, alerts are the escalation path when those checks detect downtime.

**Cron Monitor Alerts** cover the scheduled jobs case — triggering when jobs miss their windows, exceed runtime limits, or report errors back to Sentry.

## The Separation of Concerns

The thing I find well-designed about how Sentry structures this is the explicit separation between detection (Monitors) and response (Alerts). They're linked — a Monitor creates or updates an Issue, an Alert fires when that Issue matches a rule — but they're configured independently.

This matters in practice. The engineer who writes the scheduled job and knows its expected runtime is the right person to configure the cron monitor. The team lead who decides that a P0 failure at 2am should page someone — and who that someone is — is the right person to configure the alert rule. Those decisions have different owners and change at different rates. Keeping them separate means you can update one without accidentally breaking the other.

## Reducing the Noise

Sentry has a whole section on best practices for reducing false positives, and the acknowledgment that alert fatigue is a real problem worth designing against is the right framing. Muting noisy alerts, using threshold filters to avoid paging on single-event spikes, layering conditions to narrow scope — these are the tools for keeping `#alerts-production` from becoming a channel that nobody reads.

Alerts can also be disabled automatically when they're duplicates or have no configured actions — a quiet guardrail that keeps stale configuration from accumulating and adding to the noise floor.

## The Thing Worth Waking Someone Up For

The goal is an alert that reliably means "something you need to act on has happened." Getting there takes iteration — you'll tune conditions, adjust thresholds, figure out which team owns which failure modes. But the infrastructure to do it is all there, and the separation between detection and response means you can tune each side independently as your understanding of the system matures.

The channel called `#alerts-production` can be worth reading again. That's the goal.
