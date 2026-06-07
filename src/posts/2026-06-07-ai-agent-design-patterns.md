---
title: AI Agent Design Patterns
date: 2026-06-07
published: true
categories:
  - Design Patterns
  - AI
  - AI Agent
  - LLM
tags:
  - design-patterns
  - ai
  - ai-agent
  - llm
---

<div>AI Agent Design Patterns</div>

<div>ReAct (Reason + Act)</div>
<p>Concept: Alternate between reasoning steps and taking actions (tool calls, API calls, etc.)</p>
<p>Flow:</p>
<ol>
  <li>LLM generates reasoning / thought</li>
  <li>Take action (call a tool or external system)</li>
  <li>Observe output and feed it back into reasoning</li>
</ol>
<p>Strengths: Multi-step problem solving, tool orchestration, grounded responses</p>
<p>Use case: Complex question answering, multi-tool agents, decision-making systems</p>

<div>Tool-Calling / Tool-Augmented Agents</div>
<p>Concept: The LLM acts as a controller that decides whether to call external tools</p>
<p>Flow:</p>
<ol>
  <li>LLM receives input</li>
  <li>LLM selects which tool(s) to call</li>
  <li>Execute tool(s)</li>
  <li>Synthesize final answer from tool output</li>
</ol>
<p>Strengths: Reduces hallucinations, improves grounding, enables use of APIs and external systems</p>
<p>Use case: Wikipedia-style assistants, math solvers, structured data retrieval</p>

<div>Reflex / Reactive Agents</div>
<p>Concept: Immediate response without planning or multi-step reasoning</p>
<p>Flow: Input → Response</p>
<p>Strengths: Very fast, low complexity, low cost</p>
<p>Use case: Chatbots, simple Q&A systems</p>

<div>Plan-and-Execute / Hierarchical Planning Agents</div>
<p>Concept: The agent first creates a plan, then executes steps sequentially</p>
<p>Flow:</p>
<ol>
  <li>LLM generates a plan</li>
  <li>Execute each step using tools or computations</li>
  <li>Return final result</li>
</ol>
<p>Strengths: Strong for complex workflows and multi-step tasks</p>
<p>Use case: Automation systems, workflow orchestration, research agents</p>

<div>Debate / Self-Reflection Agents</div>
<p>Concept: Multiple candidate outputs are generated and evaluated before final selection</p>
<p>Flow:</p>
<ol>
  <li>Generate multiple candidate answers</li>
  <li>Critique or evaluate each candidate</li>
  <li>Select the best final output</li>
</ol>
<p>Strengths: Reduces errors, improves reliability, reduces hallucinations</p>
<p>Use case: Code review, summarization, high-accuracy Q&A</p>

<div>Memory-Augmented Agents</div>
<p>Concept: The agent stores and retrieves long-term memory to maintain context</p>
<p>Flow:</p>
<ol>
  <li>Retrieve relevant past memory</li>
  <li>Reason using current input + memory</li>
  <li>Update memory with new information</li>
</ol>
<p>Strengths: Personalization, continuity, long-term context awareness</p>
<p>Use case: Personal assistants, long-running agents, adaptive systems</p>

<div>Summary</div>
<ul>
  <li>ReAct: reasoning + acting with tools in loops</li>
  <li>Tool-Calling: LLM chooses external tools</li>
  <li>Reflex: direct single-step response</li>
  <li>Plan-and-Execute: plan first, then execute steps</li>
  <li>Debate: multiple outputs + self-evaluation</li>
  <li>Memory-Augmented: persistent context over time</li>
</ul>