# FindMonk Animations - Complete Guide

## ✨ Animation Overview

All sections now have beautiful, smooth animations that enhance user experience without being overwhelming.

---

## 🎯 Hero Section Animations

### 1. **Badge Animation**
- Fade in from bottom (y: 20)
- Pulsing dot with scale animation (1 → 1.2 → 1)
- Duration: 0.6s

### 2. **Heading Animations**
- First line: Fade + slide up (y: 20)
- "FindMonk AI": Scale + fade (0.8 → 1)
- **Special**: Gradient text has animated background position (flowing effect)
- Staggered timing for natural flow

### 3. **Description**
- Fade in from bottom
- Delayed to appear after heading
- Duration: 0.6s

### 4. **CTA Buttons**
- Fade + slide up animation
- `whileHover`: Scale 1.05 (grow slightly)
- `whileTap`: Scale 0.95 (press effect)

---

## 📜 Scroll-Triggered Animations

All sections use `useInView` hook with:
- `once: true` - Animation plays only once
- `amount: 0.2` - Triggers when 20% of section is visible

### Features Section
**Cards Animation:**
- Initial: opacity 0, y: 30
- Staggered delays (0.1s between each card)
- Icon rotates in (-180° → 0°)
- Hover: Scale 1.03, lift up 5px, blue glow shadow

### Pricing Section
**Cards Animation:**
- Initial: opacity 0, y: 30, scale 0.9
- Staggered delays (0.15s between each)
- Price scales from 0.8 → 1
- Hover: Scale 1.05, lift 8px, stronger glow

### How It Works
**Steps Animation:**
- Initial: opacity 0, x: -30 (slide from left)
- Number badges rotate in (-180° → 0°)
- Staggered delays (0.2s between steps)
- Hover: Scale 1.03, slide right 5px

### FAQ Section
**Questions Animation:**
- Initial: opacity 0, x: -20 (slide from left)
- Staggered delays (0.1s between questions)
- Hover: Scale 1.02, slide right 10px

### Contact Section
**Form Animation:**
- Form container fades + slides up
- Each input field slides from left with stagger
- Submit button fades in last
- Button has press/hover effects

---

## 🎨 Animation Details

### Timing Functions
- **ease-out**: Used for entrances (smooth deceleration)
- **ease-in-out**: Used for continuous animations (badge pulse)
- **linear**: Used for gradient flow

### Durations
- Fast interactions: 0.4-0.5s
- Standard animations: 0.6s
- Slower, dramatic: 0.7-0.8s

### Hover Effects
- Subtle scale (1.02-1.05)
- Vertical lift (-5px to -8px)
- Glow shadows on hover
- Color transitions

---

## 🚀 Performance

- All animations use CSS transforms (GPU accelerated)
- `once: true` prevents re-rendering
- Framer Motion optimized for 60fps
- No layout shifts or reflows

---

## 🎭 Animation Philosophy

1. **Purposeful**: Every animation serves a purpose
2. **Subtle**: Not distracting, enhances content
3. **Smooth**: Natural timing and easing
4. **Consistent**: Similar patterns throughout
5. **Delightful**: Micro-interactions add polish

---

## 📱 Responsive Behavior

All animations work seamlessly across:
- Desktop (full effects)
- Tablet (maintained)
- Mobile (maintained, GPU efficient)

---

**Result**: A professional, engaging landing page with smooth, purposeful animations that guide users through the content! ✨
