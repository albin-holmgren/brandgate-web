# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

Add whatever helps you do your job. This is your cheat sheet.

---

## Polymarket Trading Bot

Albin has a Polymarket prediction market trading bot running on this machine. You can check its status and report to Albin.

### Check trading status (use exec tool to run this)
```bash
cat ~/.openclaw/polymarket-status.json
```
This returns JSON with: status, balance_usdc, opportunities_found, trades_placed_this_cycle, top_opportunities.

### Check recent activity (use exec tool)
```bash
tail -20 ~/polymarket-agent/trading.log
```

### What it does
- Scans 500+ Polymarket prediction markets every 30 minutes
- Strategies: value scanner (news-based mispricing) + bond strategy (near-certain outcomes)
- Runs live and authenticated — will place real trades once USDC balance is added
- Currently: balance $0, loop sleeping between cycles

### Key facts
- Bot is autonomous — it runs in tmux session `polymarket`, does not need you to trigger it
- Config: ~/polymarket-agent/.env (DRY_RUN=false, MAX_POSITION_USDC=10)
- Wallet balance is 0 USDC — Albin needs to deposit at polymarket.com before trades execute
