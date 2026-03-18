import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent, Progress, Switch, Label, Separator, Skeleton, Avatar, AvatarFallback } from "@mintx/ui";

export default {
  title: "Core/Miscellaneous",
} as Meta;

export const TabsStory: StoryObj = {
  name: "Tabs",
  render: () => (
    <Tabs defaultValue="overview" style={{ width: 400 }}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div style={{ padding: 16, fontSize: 14, color: "var(--text-secondary)" }}>
          Market overview with real-time NIFTY and SENSEX tracking.
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div style={{ padding: 16, fontSize: 14, color: "var(--text-secondary)" }}>
          Advanced candlestick charts, Fibonacci levels, and institutional flow data.
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div style={{ padding: 16, fontSize: 14, color: "var(--text-secondary)" }}>
          Daily market reports and AI-generated insights.
        </div>
      </TabsContent>
    </Tabs>
  ),
};

export const ProgressBars: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, width: 320 }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 }}>Default — 65%</div>
        <Progress value={65} />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 }}>Gradient — 42%</div>
        <Progress value={42} gradient />
      </div>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 6 }}>Animated (loading)</div>
        <Progress value={80} animated />
      </div>
    </div>
  ),
};

export const ToggleSwitches: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="dark-mode" defaultChecked />
        <Label htmlFor="dark-mode">Dark Mode</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="notifications" />
        <Label htmlFor="notifications">Push Notifications</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Switch id="realtime" defaultChecked />
        <Label htmlFor="realtime">Real-time Data</Label>
      </div>
    </div>
  ),
};

export const Avatars: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar><AvatarFallback>AK</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>PM</AvatarFallback></Avatar>
      <Avatar><AvatarFallback>RS</AvatarFallback></Avatar>
      <Avatar className="w-12 h-12"><AvatarFallback className="text-lg">VG</AvatarFallback></Avatar>
    </div>
  ),
};

export const Skeletons: StoryObj = {
  render: () => (
    <div style={{ width: 320, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Skeleton className="w-10 h-10 rounded-full" />
        <div style={{ flex: 1 }}>
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </div>
      <Skeleton className="h-32 w-full rounded-xl" />
      <div style={{ display: "flex", gap: 8 }}>
        <Skeleton className="h-8 w-20 rounded-lg" />
        <Skeleton className="h-8 w-20 rounded-lg" />
      </div>
    </div>
  ),
};

export const SeparatorStory: StoryObj = {
  name: "Separator",
  render: () => (
    <div style={{ width: 320 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Section One</div>
      <Separator />
      <div style={{ fontSize: 14, fontWeight: 600, marginTop: 8 }}>Section Two</div>
    </div>
  ),
};
