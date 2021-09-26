---
title: 'A tour of my (neo)vim setup'
date: 'September 26 2021'
excerpt: 'Walkabout part 2, anyone?'
cover_image: '/images/big_cloud.jpeg'
---

# Why vim? 

From the moment I was introduced to it (and confused on how to exit it), I've loved vim. There was just something about its modal, keyboard-based nature that was irresistible to me, and I've become quite proficient in my movements and general text editing (yawn, I know).

# Doesn't a cli-based IDE severely hinder your development experience?

Nope!  As a web developer, one spends significant amounts of time in their IDE's integrated terminal managing packages and build tooling (with npm or yarn, for example), so the leap is more of a short hop. Combined with the text-editing power that you will soon leverage, it's more than worth the transition.

# Won't I have to take a ton of time to configure it?

Not necessarily. I did at first, but after being frustrated by my inability to integrate neovim's language server protocol (LSP), I simply cloned the open-source repository NVChad, which contains a modular, easily-extensible/configurable neovim configuration, and the rest was history. 

# Caveats

- Unless you rely upon IDE-specific features—for example, Visual Studio (*not* code!)'s build tooling—then you should be fine.

- I've yet to come across a working, integrated debugger, the likes of VSCode's. This is a totally fair dealbreaker.


# The setup


