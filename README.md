# PROJECT: PREMIUM INTERACTIVE BIRTHDAY EXPERIENCE

You are an expert frontend engineer, creative developer, UI/UX designer, and motion designer.

I have provided a reference video showing the exact style of interactive digital story I want.

Your task is to build a **premium interactive birthday experience for one specific person**.

This is NOT a generic website.
This is NOT a dashboard.
This is NOT a SaaS product.

It is a **beautiful, cinematic, interactive birthday gift website** that the birthday girl will open on her phone and experience from beginning to end.

The experience should be inspired heavily by the supplied reference video, while being completely original and significantly better where possible.

---

# 1. THE GOAL

When she opens the website, it should feel like:

"Someone created an entire digital world just for me."

It should feel personal, emotional, mysterious, beautiful and memorable.

The website should tell a story through approximately **20–30 interactive scenes/pages**.

Each scene should feel intentionally designed rather than simply being another section of a normal webpage.

---

# 2. IMPORTANT: STUDY THE REFERENCE VIDEO

Before coding, analyze the supplied video carefully.

Recreate the important UX concepts shown in the video:

* Full-screen vertical storytelling
* Editorial typography
* Elegant cream/off-white backgrounds
* Burgundy/dark-red accent typography
* Large script headings
* Small uppercase labels
* Page numbers
* Timeline/progress indicators
* Polaroid-style photographs
* Layered photographs
* Editorial text layouts
* Date/location labels
* Tap interactions
* Swipe-style navigation
* Music controls
* Smooth page transitions
* Emotional pacing

Do NOT copy the original person's name, photos, text, branding or exact content.

Use the reference as design inspiration.

---

# 3. MOBILE FIRST

This website is primarily designed for a smartphone.

The birthday girl should be able to open a link on her phone and immediately experience it.

Design for:

* Android
* iPhone
* Small screens
* Large screens

Desktop should also work, but mobile is the priority.

Use the entire viewport effectively.

Avoid making it look like a normal responsive business website.

---

# 4. OPENING EXPERIENCE

The first screen should create curiosity.

Do NOT immediately reveal everything.

Create an elegant opening such as:

---

SEALED

For [HER NAME]

A little something
I made for you.

[ OPEN ]

---

The exact wording should be easy to change.

When she taps OPEN, use a beautiful transition into the story.

---

# 5. OPTIONAL SECRET ENTRY

Create an optional interactive birthday/date puzzle inspired by the reference video.

Example:

"Enter the date..."

or

"Before we begin...
prove you know the date."

Show a beautiful custom keypad.

Buttons:

1 2 3
4 5 6
7 8 9
? 0 ←

The correct date unlocks the experience.

Make this configurable in one place in the code.

If the creator doesn't want this feature, it should be easy to disable.

---

# 6. STORY INTRODUCTION

After unlocking:

Show her name beautifully.

Example:

FOR [NAME]

Today isn't just another day.

It's yours.

Then reveal:

HAPPY BIRTHDAY

with a cinematic animation.

Do not make it childish.

Avoid excessive balloons, cartoon graphics and generic birthday templates.

The aesthetic should remain elegant.

---

# 7. STORY STRUCTURE

Create approximately 20–30 scenes.

Each scene must have its own visual composition.

Do NOT use the same layout repeatedly.

Possible sequence:

### SCENE 01

Opening / sealed message

### SCENE 02

Secret unlock

### SCENE 03

Her name

### SCENE 04

Birthday reveal

### SCENE 05

"Before we get to today..."

### SCENE 06

How we met / first memory

### SCENE 07

First photograph

### SCENE 08

A special memory

### SCENE 09

Timeline

### SCENE 10

Photo collage

### SCENE 11

A funny memory

### SCENE 12

A heartfelt message

### SCENE 13

Polaroid memory

### SCENE 14

"Things I love about you"

### SCENE 15

Interactive cards

### SCENE 16

A memory gallery

### SCENE 17

A letter

### SCENE 18

A special quote

### SCENE 19

"What makes you different"

### SCENE 20

Future memories

### SCENE 21

Birthday message

### SCENE 22

Final photograph

### SCENE 23

Final letter

### SCENE 24

Final reveal

The exact number can be adjusted.

---

# 8. EVERY SCENE SHOULD FEEL DIFFERENT

This is extremely important.

Do NOT build 25 copies of the same section.

Use different compositions.

Examples:

### Editorial layout

Small label

"08 / MEMORY"

Large script title

"That Day"

Paragraph underneath.

---

### Polaroid layout

Large tilted photograph.

Small caption underneath.

Date + location.

---

### Collage layout

Multiple photographs layered over each other.

Some slightly rotated.

---

### Full-screen photograph

Full-screen image with text appearing gradually over it.

---

### Letter layout

Cream paper background.

Elegant typography.

Letter slowly appears as if being written.

---

### Timeline

Vertical timeline with memories appearing sequentially.

---

### Interactive cards

Cards that flip/reveal messages when tapped.

---

### Hidden message

A sealed envelope/card.

Tap it.

It opens.

Message appears.

---

# 9. PHOTOS

The creator should be able to easily replace placeholder images.

Create a centralized content/configuration system.

For example:

assets/
photos/
photo01.jpg
photo02.jpg
photo03.jpg
photo04.jpg

Do not hard-code random external image URLs.

Use placeholder images during development.

Make it obvious where I should replace them.

---

# 10. PHOTO INTERACTIONS

Implement:

* Tap to enlarge
* Swipe between photos
* Polaroid animation
* Image zoom
* Layered cards
* Gallery mode

Some photos should appear naturally rather than simply inside rectangular website cards.

---

# 11. MUSIC

Add background music.

Requirements:

* Music starts after the first user interaction
* Play/pause control
* Mute control
* Music continues between scenes
* Elegant music icon
* Do not violate browser autoplay restrictions

Put the audio file in:

assets/audio/

Make it easy to replace.

---

# 12. PROGRESS INDICATOR

Show subtle progress.

Example:

05 / 24

or small dots.

It should update automatically.

Do not make the progress UI dominate the screen.

---

# 13. NAVIGATION

Primary interaction:

Swipe vertically or horizontally depending on the scene structure.

Also support:

* Tap right side → next
* Tap left side → previous
* Keyboard arrows on desktop
* Small navigation controls

Navigation must feel natural.

Prevent accidental scrolling from breaking the experience.

---

# 14. ANIMATIONS

Use high-quality motion.

Examples:

* Text fade
* Text slide
* Letter reveal
* Image zoom
* Image rotation
* Polaroid stacking
* Page transitions
* Parallax
* Blur transitions
* Soft scale
* Mask reveals
* Staggered text animation

Use animation carefully.

The goal is:

**cinematic**

not:

**over-animated.**

---

# 15. EMOTIONAL PACING

The story should have a progression.

Beginning:

Curiosity

↓

Middle:

Memories

↓

Middle:

Emotion

↓

Late:

Appreciation

↓

Ending:

Birthday celebration

↓

Final:

Emotional message

Do not reveal the most meaningful message immediately.

Build toward it.

---

# 16. BIRTHDAY SECTION

The birthday reveal should be one of the strongest moments.

Example:

The screen becomes almost empty.

Small text:

"There's one thing I haven't said yet..."

Pause.

Then:

HAPPY

BIRTHDAY

[HER NAME]

Then photographs and a personal message appear.

Make this cinematic.

---

# 17. "THINGS I LOVE ABOUT YOU"

Create interactive cards.

Example:

┌───────────────┐
│      01       │
│               │
│ Your smile    │
│               │
└───────────────┘

Tap → card reveals explanation.

Create multiple cards.

Examples:

Your smile
Your energy
Your kindness
Your craziness
Your strength
Your laugh

The actual content must be configurable.

---

# 18. MEMORY TIMELINE

Create an elegant timeline.

Example:

2024
│
● First meeting
│
● First conversation
│
● First unforgettable moment
│
● That day...
│
2025
│
● Another memory
│
● Another adventure
│
2026
│
● Today

Each timeline item can reveal a photograph and story.

---

# 19. PERSONAL LETTER

Create a full-screen letter section.

It should feel like a real letter.

Example:

"Dear [NAME],

I don't know if a website can properly explain
how much you mean to me...

..."

Animate the text elegantly.

Do not type the actual letter yourself.

Use placeholder content and make it easy for me to replace.

---

# 20. FINAL SECTION

The ending should not suddenly stop.

Create a cinematic final sequence.

Example:

One final photograph.

Then:

"Thank you for being you."

Pause.

"Happy Birthday, [NAME]."

Pause.

"And this is only the beginning."

Then show:

[HER NAME]

♥

Optionally show:

Birthday:
[DATE]

Created with love.

---

# 21. VISUAL DESIGN

Default palette:

* Warm ivory
* Cream
* Burgundy
* Dark brown
* Soft beige
* White

Typography:

Use an elegant serif font for body text.

Use a beautiful script/calligraphy font for major emotional headings.

Use a refined uppercase font for labels.

Do not use generic system fonts for the major visual elements.

---

# 22. PAPER / EDITORIAL EFFECT

The reference has a beautiful paper/editorial feel.

Recreate this using CSS.

Include subtle:

* Paper texture
* Grain
* Fine lines
* Soft shadows
* Faded edges
* Layered paper
* Slight imperfections

Do NOT use a giant obvious texture that makes the site look dirty.

Keep it subtle.

---

# 23. RESPONSIVE DESIGN

Mobile:

Full-screen immersive experience.

Tablet:

Maintain composition.

Desktop:

Center the experience inside a beautiful story frame or allow full-screen presentation.

Do not stretch mobile elements awkwardly across a desktop monitor.

---

# 24. TECH STACK

Use:

React
TypeScript
Vite
Tailwind CSS
Framer Motion

Keep the project lightweight.

This is primarily a frontend experience.

Do NOT create a backend unless genuinely necessary.

---

# 25. CONTENT CONFIGURATION

Create a central configuration file.

Example:

src/data/story.ts

It should contain:

recipientName
senderName
birthday
unlockDate
music
chapters
memories
photos
messages
timeline
loveCards

I should be able to change the person's details without digging through components.

---

# 26. COMPONENT ARCHITECTURE

Use reusable components.

Examples:

StoryEngine
Scene
SceneTransition
ProgressIndicator
Navigation
MusicPlayer
Polaroid
PhotoGallery
Timeline
Letter
MemoryCard
RevealCard
BirthdayReveal
FinalMessage

Do not build everything inside App.tsx.

---

# 27. STORY ENGINE

Create a story engine that knows:

Current scene
Total scenes
Next scene
Previous scene
Scene transition
Scene state
Progress
Music state

This will make the experience easy to modify.

---

# 28. PERFORMANCE

Optimize:

* Images
* Animations
* Fonts
* JavaScript
* Initial loading

Use:

* Lazy loading
* Preloading of the next scene
* Optimized images
* Efficient React rendering

The website must feel smooth on mid-range Android phones.

---

# 29. ACCESSIBILITY

Support:

* Keyboard navigation
* Screen readers where appropriate
* Reduced motion
* Accessible buttons
* Good contrast
* Alt text

---

# 30. IMPORTANT: DO NOT BUILD A GENERIC TEMPLATE

This is NOT:

A birthday invitation website.

It is NOT:

A normal birthday greeting page.

It is NOT:

A dashboard.

It is NOT:

A collection of cards on a webpage.

It should feel like an **interactive cinematic digital story**.

The user should feel like they are moving through a carefully crafted experience.

---

# 31. PLACEHOLDER CONTENT

Until I provide the actual:

* Name
* Photos
* Birthday
* Memories
* Dates
* Messages
* Music

use clearly marked placeholder content.

Example:

[RECIPIENT_NAME]

[MEMORY_PHOTO_01]

[MEMORY_DATE_01]

[PERSONAL_MESSAGE_01]

Do not invent personal facts about the person.

---

# 32. DEVELOPMENT WORKFLOW

First:

Analyze the reference video.

Second:

Create the visual design system.

Third:

Build the story engine.

Fourth:

Build the first 5 scenes.

Fifth:

Run the application and inspect the result.

Sixth:

Improve the visual quality.

Seventh:

Build the remaining scenes.

Eighth:

Add interactions and animations.

Ninth:

Test on mobile dimensions.

Tenth:

Fix all visual and functional issues.

---

# 33. QUALITY STANDARD

Do not stop when the application technically works.

Ask yourself:

Would this look impressive if someone opened it on their phone?

Does it feel intentional?

Do the transitions feel cinematic?

Does every scene have a reason to exist?

Does the typography feel premium?

Does the story build emotion?

Does the final reveal feel memorable?

If the answer is no, improve it.

---

# 34. FINAL REQUIREMENT

Build something that captures the spirit of the reference video but **surpasses it in interaction, storytelling, visual quality and polish**.

Do not simply recreate screenshots.

Recreate the EXPERIENCE.

The final product should make the recipient want to:

* Keep scrolling
* Discover the next scene
* Look at the photos
* Read the messages
* Interact with the elements
* Reach the ending

Most importantly:

When she reaches the final screen, it should feel like someone genuinely put effort into creating something specifically for her.
