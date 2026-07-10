---
name: Vibrant Momentum
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6c7a71'
  outline-variant: '#bbcabf'
  surface-tint: '#006c49'
  primary: '#006c49'
  on-primary: '#ffffff'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#4edea3'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 32px
  gutter: 16px
  card-gap: 12px
  section-gap: 32px
---

## Brand & Style

The design system focuses on creating an environment of positive reinforcement and rhythmic clarity. It targets individuals seeking personal growth through habit formation, requiring a UI that feels both encouraging and disciplined.

The aesthetic blends **Modern Corporate** precision with **Minimalist** breathing room. It prioritizes high-energy visual feedback—celebrating small wins with vibrant color pops—while maintaining a calm, structured foundation. The emotional response should be one of "attainable progress": professional enough to be taken seriously as a tool, yet soft enough to feel like a supportive companion. High-quality whitespace and purposeful motion (implied by the layout) drive the user toward their next action without cognitive overwhelm.

## Colors

This design system utilizes a "Success-First" color palette. The primary green (`#10B981`) is reserved for positive completion states and primary action buttons, signaling growth and achievement. The secondary blue (`#3B82F6`) is used for focus states, deep work habits, and navigational elements. The tertiary amber (`#F59E0B`) acts as a "warning" or "near-miss" indicator for streaks at risk.

The background uses a soft off-white/grey (`#F8FAFC`) to reduce eye strain, while text levels are mapped to varying weights of the neutral slate to maintain a clear information hierarchy without the harshness of pure black.

## Typography

Typography is the cornerstone of the system's "friendly-yet-active" persona. **Lexend** is chosen for headlines and numeric progress displays due to its exceptional readability and athletic, modern character. It encourages a sense of forward motion.

**Plus Jakarta Sans** provides a soft, approachable contrast for body copy and labels. Its slightly rounded terminals complement the overall shape language of the design system. For mobile views, headline sizes are aggressively scaled down to ensure habit titles remain visible in card-based layouts without excessive wrapping.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict vertical rhythm based on an 8px unit. 

- **Mobile:** A single-column list view for habits, utilizing 16px side margins. 
- **Desktop:** A 12-column grid where habit dashboards occupy 8 columns and "Community" or "Insights" sidebars occupy 4.
- **Rhythm:** Elements within a habit card use a tight 8px or 12px gap to feel cohesive, while major sections (e.g., "Today's Habits" vs "Weekly Progress") are separated by 32px to provide clear visual breathing room.

## Elevation & Depth

Depth is achieved through **Tonal Layers** supplemented by **Ambient Shadows**. The design avoids harsh borders, instead using subtle background shifts to define sections.

- **Level 0 (Base):** `#F8FAFC` background.
- **Level 1 (Cards):** White background with a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.04)).
- **Level 2 (Interactive/Floating):** White background with a more pronounced shadow (0px 10px 30px rgba(0,0,0,0.08)) to indicate "lift" during drag-and-drop or active states.

Backdrop blurs (12px) are used exclusively for modal overlays and sticky bottom navigation bars to maintain context of the underlying progress charts.

## Shapes

The shape language is consistently **Rounded**, reinforcing the friendly and non-intimidating nature of the brand. 

- **Standard Elements:** 0.5rem (8px) for input fields and small buttons.
- **Cards:** 1rem (16px) for habit cards and progress containers to make them feel "contained" and tactile.
- **Progress Bars:** Use fully rounded (pill-shaped) caps to emphasize the fluid nature of habit streaks.

## Components

### Buttons
Primary buttons use the Success Green with white text, featuring a subtle 2px bottom "press" shadow. Secondary buttons use a ghost style (transparent background, blue outline).

### Habit Cards
The primary component. Cards feature a large "Lexend" numeric streak counter on the left, habit name and frequency in the center, and a large, tactile circular checkbox on the right. When checked, the card should undergo a subtle color shift to a light green tint.

### Progress Charts
Use smooth, rounded line graphs or bar charts with a 4px corner radius on individual bars. Data points should be large and easy to tap.

### Chips & Tags
Used for habit categories (e.g., "Health," "Finance"). These use low-saturation versions of the primary colors with high-saturation text to ensure legibility without competing with the primary "Complete" action.

### Input Fields
Soft-grey backgrounds with 2px borders that animate to the Secondary Blue on focus. Labels always sit above the field in the `label-md` style.

### Success Celebration
A temporary full-screen component triggered on habit completion, utilizing high-energy color bursts and large-scale Lexend typography.