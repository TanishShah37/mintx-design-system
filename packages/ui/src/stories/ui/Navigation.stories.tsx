import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/Accordion";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../../components/ui/Tooltip";
import { Breadcrumbs } from "../../components/ui/Breadcrumbs";
import { Pagination } from "../../components/ui/Pagination";
import { Button } from "../../components/ui/Button";
import React from "react";

const meta: Meta = {
  title: "UI/Navigation",
  tags: ["autodocs"],
};
export default meta;

export const AccordionDemo: StoryObj = {
  name: "Accordion",
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is SIP?</AccordionTrigger>
        <AccordionContent>
          Systematic Investment Plan (SIP) lets you invest a fixed amount in mutual funds at regular intervals, helping you average your purchase cost over time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How does Mintx protect my data?</AccordionTrigger>
        <AccordionContent>
          All data is encrypted at rest (AES-256) and in transit (TLS 1.3). SOC 2 Type II certified.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What markets are supported?</AccordionTrigger>
        <AccordionContent>
          NSE and BSE for Indian equities, F&O, and mutual funds. International markets coming in Q3 2025.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const TooltipDemo: StoryObj = {
  name: "Tooltip",
  render: () => (
    <div style={{ display: "flex", gap: 16, padding: 32 }}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="primary">Hover (top)</Button>
          </TooltipTrigger>
          <TooltipContent>Buy order confirmed — RELIANCE @ ₹2450</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Hover (bottom)</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">NSE: 09:15–15:30 IST</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost">Hover (right)</Button>
          </TooltipTrigger>
          <TooltipContent side="right">SIP = Systematic Investment Plan</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
};

export const BreadcrumbsDemo: StoryObj = {
  name: "Breadcrumbs",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "#" },
          { label: "Markets", href: "#" },
          { label: "Equities", href: "#" },
          { label: "RELIANCE" },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Dashboard", href: "#" },
          { label: "Portfolio", href: "#" },
          { label: "Holdings" },
        ]}
      />
    </div>
  ),
};

export const PaginationDemo: StoryObj = {
  name: "Pagination",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Pagination totalPages={10} currentPage={3} onPageChange={() => {}} />
      <Pagination totalPages={5} currentPage={1} onPageChange={() => {}} />
    </div>
  ),
};
