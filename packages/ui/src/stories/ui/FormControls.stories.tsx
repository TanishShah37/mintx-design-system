import type { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "../../components/ui/CheckBox";
import { RadioGroup, RadioGroupItem } from "../../components/ui/Radio";
import { Switch } from "../../components/ui/Switch";
import { Slider } from "../../components/ui/Slider";
import React, { useState } from "react";

const meta: Meta = {
  title: "UI/Form Controls",
  tags: ["autodocs"],
};
export default meta;

export const CheckBoxVariants: StoryObj = {
  name: "CheckBox",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <CheckBox label="Enable notifications" defaultChecked />
      <CheckBox label="Auto-invest enabled" />
      <CheckBox label="Disabled option" disabled />
      <CheckBox label="With validation error" error="Please accept terms to continue" />
    </div>
  ),
};

export const RadioGroupVariants: StoryObj = {
  name: "RadioGroup",
  render: () => (
    <RadioGroup defaultValue="sip" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <RadioGroupItem value="sip" label="SIP (Monthly)" />
      <RadioGroupItem value="lumpsum" label="Lumpsum" />
      <RadioGroupItem value="staggered" label="Staggered Investment" />
      <RadioGroupItem value="disabled" label="Disabled" disabled />
    </RadioGroup>
  ),
};

export const SwitchVariants: StoryObj = {
  name: "Switch",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Switch label="Dark mode" defaultChecked />
      <Switch label="Live price alerts" />
      <Switch label="2FA Authentication" defaultChecked />
      <Switch label="Disabled (feature locked)" disabled />
    </div>
  ),
};

export const SliderVariants: StoryObj = {
  name: "Slider",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 8 }}>
      <Slider label="Risk Level" defaultValue={[40]} min={0} max={100} step={5} />
      <Slider label="SIP Amount (₹1,000 – ₹50,000)" defaultValue={[15000]} min={1000} max={50000} step={500} />
      <Slider label="Disabled slider" defaultValue={[30]} disabled />
    </div>
  ),
};
