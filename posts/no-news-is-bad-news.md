---
title: "No News Is Bad News"
date: "2026-04-18T00:00:00"
author: "Nick Meisenheimer"
excerpt: "The most dangerous failures are the ones that make no noise at all."
---

There's a type of failure that's harder to catch than a crash. A crash makes noise — stack traces, error events, a spike in your error rate. Someone gets paged. The thing gets fixed.

But some of the most damaging failures make no noise at all. The invoice job that was supposed to run at 2am quietly didn't. The database cleanup stopped completing before the read replica caught up. The endpoint your mobile app depends on started returning 502s at 3am on a Tuesday, and nobody knew until customers started complaining Wednesday morning.

Traditional error monitoring doesn't catch this class of failure because it's reactive — something throws an exception, the SDK catches it, you get an event. But silent failures don't throw exceptions. They fail by absence.

## Watching for What Doesn't Happen

Sentry Monitors exist to close this gap. Instead of waiting for your code to emit a signal, Monitors watch for expected signals that stop arriving.

**Cron Monitors** track scheduled jobs. You configure what schedule a job should run on, how long it's allowed to take, and then your job calls into Sentry with check-ins — at start, at completion, or both. From there, Sentry watches the schedule. If the job misses its window, Sentry creates an issue. If it takes longer than expected, that's an issue too. If the job itself reports an error status, same result. Three distinct failure modes, one configuration.

The practical upshot is that jobs which used to run silently in the dark — the invoice processor, the notification sender, the cleanup script — become first-class observable components of your system. When something goes wrong, you find out from Sentry rather than from a customer.

**Uptime Monitors** do the equivalent thing for web services. Sentry sends regular HTTP requests to URLs you care about and verifies the responses. Configurable method, headers, body, check interval, timeout threshold, and success criteria. Sentry will also automatically create uptime monitors for hostnames it encounters frequently in your error data — so the services your application already depends on get coverage without you having to manually enumerate them.

Uptime checks don't count against your span quota, which removes one of the common reasons teams don't monitor everything they should. Less friction means fewer gaps.

## Detection Is Only Half the Job

The piece I find most interesting about how Monitors are structured is that they're explicitly only the detection layer. A monitor evaluates data, identifies conditions, and creates or updates issues. What you *do* about those issues — who gets notified, on what channel, under what conditions — is a separate concern handled by Alerts.

The separation is useful because those two problems have different cadences. You tune detection logic when you learn what failure modes exist. You tune notification logic when you learn who needs to know about them and how urgently. Keeping them independent means you can change one without disturbing the other.

## The Value of Verified Silence

The goal isn't just to be notified when things break. It's to be able to distinguish *verified-healthy* from *simply-haven't-heard-yet*. Monitors give you that. When the job runs, you know it ran. When the endpoint responds, you know it responded. And when they don't — you find out before your users do.

Setting up a cron monitor is as close as adding a check-in call at the start and end of your job. The upside is knowing immediately when the job your billing system depends on stops running — rather than finding out two days later when a customer files a ticket.

> The absence of the signal is the signal.
