'use client'

import React from 'react'
import { cn } from '../../tokens/cn'

export interface FibSpiralProps {
  theme?: 'dark' | 'light'
  className?: string
}

export function FibSpiral({ theme = 'dark', className }: FibSpiralProps) {
  const dark = theme === 'dark'
  const lineAlpha = dark ? 'rgba(232,239,237,' : 'rgba(20,31,29,'
  const chipBg = dark ? 'rgba(8,14,13,0.93)' : 'rgba(245,248,247,0.95)'
  const chipBd = dark ? 'rgba(0,179,138,0.22)' : 'rgba(0,179,138,0.3)'

  return (
    <div
      className={cn('relative flex items-center justify-center select-none', className)}
      aria-hidden
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 50%, rgba(0,179,138,0.07) 0%, transparent 70%)',
          transform: 'scale(1.2)',
        }}
      />
      <svg
        viewBox="-300 -220 600 440"
        className="w-full max-w-[540px]"
        style={{ filter: 'drop-shadow(0 0 48px rgba(0,179,138,0.10))' }}
      >
        <defs>
          <style>{`
            @keyframes drawSpiral{from{stroke-dashoffset:2200}to{stroke-dashoffset:0}}
            @keyframes popIn{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}
            @keyframes pulseDot{0%,100%{r:4}50%{r:7}}
            @keyframes pulseRing{0%,100%{r:8;opacity:0.25}50%{r:14;opacity:0}}
            .sp{stroke-dasharray:2200;stroke-dashoffset:2200;animation:drawSpiral 3.2s cubic-bezier(0.16,1,0.3,1) 0.4s forwards}
            .pi{opacity:0;animation:popIn 0.4s ease forwards}
            .d1{animation-delay:0.8s}.d2{animation-delay:1.1s}.d3{animation-delay:1.4s}
            .d4{animation-delay:1.7s}.d5{animation-delay:2.0s}.d6{animation-delay:2.3s}
            .d7{animation-delay:2.6s}.d8{animation-delay:2.9s}
          `}</style>
          <filter id="glow2" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid */}
        {[-200, -100, 0, 100, 200].map((v) => (
          <g key={v}>
            <line
              x1={v}
              y1="-220"
              x2={v}
              y2="220"
              stroke={`${lineAlpha}0.025)`}
              strokeWidth="1"
            />
            <line
              x1="-290"
              y1={v}
              x2="290"
              y2={v}
              stroke={`${lineAlpha}0.025)`}
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Fibonacci rectangles */}
        <rect
          x="-280"
          y="-170"
          width="280"
          height="170"
          fill="none"
          stroke="rgba(0,179,138,0.06)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="pi d1"
        />
        <rect
          x="-170"
          y="-170"
          width="170"
          height="170"
          fill="rgba(0,179,138,0.022)"
          stroke="rgba(0,179,138,0.10)"
          strokeWidth="1"
          className="pi d2"
        />
        <rect
          x="-170"
          y="-60"
          width="105"
          height="60"
          fill="rgba(0,179,138,0.035)"
          stroke="rgba(0,179,138,0.16)"
          strokeWidth="1"
          className="pi d3"
        />
        <rect
          x="-170"
          y="-60"
          width="66"
          height="60"
          fill="rgba(0,179,138,0.055)"
          stroke="rgba(0,179,138,0.24)"
          strokeWidth="1.5"
          className="pi d4"
        />
        <rect
          x="-170"
          y="-22"
          width="40"
          height="22"
          fill="rgba(0,179,138,0.08)"
          stroke="rgba(0,179,138,0.35)"
          strokeWidth="1.5"
          className="pi d5"
        />
        <rect
          x="-170"
          y="-22"
          width="25"
          height="22"
          fill="rgba(0,179,138,0.12)"
          stroke="rgba(0,179,138,0.50)"
          strokeWidth="2"
          className="pi d6"
        />

        {/* Spiral */}
        <path
          className="sp"
          d="M-145,-22 A25,25 0 0,1 -170,0 A40,40 0 0,0 -130,40 A66,66 0 0,1 -170,106 A105,105 0 0,0 -65,0 A170,170 0 0,1 105,-170 A280,280 0 0,0 -170,110"
          fill="none"
          stroke="#00B38A"
          strokeWidth="1.8"
          strokeLinecap="round"
          filter="url(#glow2)"
        />

        {/* Price levels */}
        {[
          {
            y: -170,
            pct: '0%',
            lbl: 'High - start of move',
            cls: 'd2',
            bold: false,
          },
          {
            y: -130,
            pct: '23.6%',
            lbl: 'First pause zone',
            cls: 'd3',
            bold: false,
          },
          {
            y: -100,
            pct: '38.2%',
            lbl: 'Shallow pullback',
            cls: 'd4',
            bold: false,
          },
          {
            y: -66,
            pct: '50.0%',
            lbl: 'Midpoint - watch closely',
            cls: 'd5',
            bold: false,
          },
          {
            y: -22,
            pct: '61.8%',
            lbl: 'Golden ratio support ★',
            cls: 'd6',
            bold: true,
          },
          {
            y: 0,
            pct: '100%',
            lbl: 'Low - base of move',
            cls: 'd7',
            bold: false,
          },
        ].map(({ y, pct, lbl, cls, bold }) => (
          <g key={pct} className={cn('pi', cls)}>
            <line
              x1="-290"
              x2="270"
              y1={y}
              y2={y}
              stroke={bold ? '#00B38A' : `${lineAlpha}0.14)`}
              strokeWidth={bold ? 1.5 : 0.75}
              strokeDasharray={bold ? undefined : '3 6'}
            />
            <text
              x="-286"
              y={y - 4}
              fontFamily="DM Mono,monospace"
              fontSize={bold ? 9.5 : 8}
              fontWeight={bold ? 700 : 400}
              fill={bold ? '#00B38A' : `${lineAlpha}0.35)`}
            >
              {pct}
            </text>
            <text
              x="268"
              y={y - 4}
              fontFamily="DM Mono,monospace"
              fontSize="7.5"
              fill={bold ? 'rgba(0,179,138,0.6)' : `${lineAlpha}0.22)`}
              textAnchor="end"
            >
              {lbl}
            </text>
            {bold && (
              <>
                <circle
                  cx="-65"
                  cy={y}
                  r="4"
                  fill="#00B38A"
                  filter="url(#glow2)"
                />
                <circle cx="-65" cy={y} r="4" fill="#00B38A">
                  <animate
                    attributeName="r"
                    values="4;12;4"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;0;0.8"
                    dur="2.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x="-53"
                  y={y + 4}
                  fontFamily="DM Mono,monospace"
                  fontSize="8"
                  fontWeight="600"
                  fill="#00B38A"
                >
                  ← move zone
                </text>
              </>
            )}
          </g>
        ))}

        {/* Live chip */}
        <g className="pi d8">
          <rect
            x="58"
            y="-52"
            width="134"
            height="40"
            rx="7"
            fill={chipBg}
            stroke={chipBd}
            strokeWidth="1"
          />
          <text
            x="126"
            y="-33"
            fontFamily="DM Mono,monospace"
            fontSize="10"
            fontWeight="700"
            fill="#3DDCBA"
            textAnchor="middle"
          >
            TCS | ₹3,847
          </text>
          <text
            x="126"
            y="-19"
            fontFamily="DM Mono,monospace"
            fontSize="7.5"
            fill="rgba(34,197,94,0.75)"
            textAnchor="middle"
          >
            ▲ +2.37% | 61.8% move zone ✓
          </text>
        </g>
      </svg>
    </div>
  )
}
