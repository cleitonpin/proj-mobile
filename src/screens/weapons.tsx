import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { Table, Row } from 'react-native-table-component';

interface WeaponsProps { }

const weapons = [
  {
    "name": "Summit Shaper",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Summit_Shaper.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "-",
    "bonus": "Increases Shield Strength by 20/25/30/35/40%. Scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.",
    "location": "Wish"
  },
  {
    "name": "Skyward Blade",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Blade.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "46",
    "secondary": "Energy Recharge",
    "passive": "Sky-Piercing Fang",
    "bonus": "CRIT Rate increased by 4/5/6/7/8%. Gains Skypiercing Might upon using an Elemental Burst:\nIncreases Movement SPD by 10%, increases ATK SPD by 10%, and increases the DMG of Normal and Charged Attack hits by 20/25/30/35/40% for 12s.",
    "location": "Wish"
  },
  {
    "name": "Primordial Jade Cutter",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Primordial_Jade_Cutter.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "44",
    "secondary": "CRIT Rate",
    "passive": "Protector's Virtue",
    "bonus": "HP increased by 20/25/30/35/40%. Additionally, provides an ATK bonus based on 1.2/1.5/1.8/2.1/2.4% of the weilder's Max HP.",
    "location": "Wish"
  },
  {
    "name": "Mistsplitter Reforged",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Mistsplitter_Reforged.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "48",
    "secondary": "CRIT DMG",
    "passive": "Mistsplitter's Edge",
    "bonus": "Gain a 12/15/18/21/24% Elemental DMG Bonus for every element and receive the might of Mistsplitter's Emblem. At stack levels 1/2/3, Mistsplitter's Emblem provides a 8/16/28% // 10/17/35% // 12/18/42% // 14/19/49% // 16/20/56% Elemental DMG Bonus for the character's Elemental Type. The character will obtain 1 stack of Mistsplitter's Emblem in each of the following scenarios: Normal Attack deals Elemental DMG (stack lasts 5s), casting Elemental Burst (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
    "location": "Wish"
  },
  {
    "name": "Haran Geppaku Futsu",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Haran_Geppaku_Futsu.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "46",
    "secondary": "CRIT Rate",
    "passive": "Honed Flow",
    "bonus": "Obtain 12% All Elemental DMG Bonus. When other nearby party members use Elemental Skills, the character equipping this weapon will gain 1 Wavespike stack. Max 2 stacks. This effect can be triggered once every 0.3s. When the character equipping this weapon uses an Elemental Skill, all stacks of Wavespike will be consumed to gain Rippling Upheaval: each stack of Wavespike consumed will increase Normal Attack DMG by 20% for 8s.",
    "location": "Wish"
  },
  {
    "name": "Freedom-Sworn",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Freedom-Sworn.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "46",
    "secondary": "Elemental Mastery",
    "passive": "Revolutionary Chorale",
    "bonus": "A part of the \"Millennial Movement\" that wanders amidst the winds. Increases DMG by 10/12.5/15/17.5/20%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field.\nWhen you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain \"Millennial Movement: Song of Resistance\" for 12s. \"Millennial Movement: Song of Resistance\" increases Normal, Charged, and Plunging Attack DMG by 16/20/24/28/32% and increases ATK by 20/25/30/35/40%. Once this effect is triggered, you will not gain Sigils of Rebellion for 20s.\nOf the many effects of the \"Millennial Movement,\" buffs of the same type will not stack.",
    "location": "Wish"
  },
  {
    "name": "Aquila Favonia",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Aquila_Favonia.png",
    "type": "Sword",
    "rarity": "5",
    "atk": "48",
    "secondary": "Physical DMG Bonus",
    "passive": "Falcon's Defiance",
    "bonus": "ATK is increased by 20/25/30/35/40%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of the resistance aloft, regenerating HP equal to 100/115/130/145/160% of ATK and dealing 200/230/260/290/320% of ATK as DMG to surrounding enemies. This effect can only occur once every 15s.",
    "location": "Wish"
  },
  {
    "name": "Vortex Vanquisher",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Vortex_Vanquisher.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "Golden Majesty",
    "bonus": "Increases Shield Strength by 20/25/30/35/40%, scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield this ATK increase effect is increased by 100%",
    "location": "Wish"
  },
  {
    "name": "Staff of Homa",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Staff_of_Homa.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "46",
    "secondary": "CRIT DMG",
    "passive": "Reckless Cinnabar",
    "bonus": "HP increased by 20/25/30/35/40%. Additionally, provides an ATK Bonus based on 0.8/1/1.2/1.4/1.6% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK bonus is increased by an additional 1/1.2/1.4/1.6/1.8% of Max HP.",
    "location": "Wish"
  },
  {
    "name": "Skyward Spine",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Spine.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "48",
    "secondary": "Energy Recharge",
    "passive": "Black Wing",
    "bonus": "Increases CRIT Rate by 8/10/12/14/16% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on enemies have a 50% chance to trigger a vacuum blade that deals 40/55/70/85/100% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.",
    "location": "Wish"
  },
  {
    "name": "Primordial Jade Winged-Spear",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Primordial_Jade_Winged-Spear.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "48",
    "secondary": "CRIT Rate",
    "passive": "Eagle Spear of Justice",
    "bonus": "On hit, increases ATK by 3.2/3.9/4.6/5.3/6% for 6s. Max 7 stacks. This effect can only occur once every 0.3s. While in possession of the maximum possible stacks, DMG dealt is increased by 12/15/18/21/24%.",
    "location": "Wish"
  },
  {
    "name": "Engulfing Lightning",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Engulfing_Lightning.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "46",
    "secondary": "Energy Recharge",
    "passive": "Timeless Dream: Eternal Stove",
    "bonus": "ATK increased by 28/34/40/46/52% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80/90/100/110/120% ATK. Gain 30/35/40/45/50% Energy Recharge for 12s after using an Elemental Burst.",
    "location": "Wish"
  },
  {
    "name": "Calamity Queller",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Calamity_Queller.png",
    "type": "Polearm",
    "rarity": "5",
    "atk": "?",
    "secondary": "ATK",
    "passive": "Extinguishing Precept",
    "bonus": "Gain 12% All Elemental DMG Bonus. Obtain Consummation for 20s after using an Elemental Skill, causing ATK to increase by 3.2% per second. This ATK increase has a maximum of 6 stacks. When the character equipped with this weapon is not on the field, Consummation's ATK increase is doubled.",
    "location": "Wish"
  },
  {
    "name": "Wolf's Gravestone",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Wolf's_Gravestone.png",
    "type": "Claymore",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "Wolfish Tracker",
    "bonus": "Increases ATK by 20/25/30/35/40%. On hit, attacks against enemies with less than 30% HP increase all party members' Base ATK by 40/50/60/70/80% for 12s. Can only occur once every 30s.",
    "location": "Wish"
  },
  {
    "name": "The Unforged",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Unforged.png",
    "type": "Claymore",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "-",
    "bonus": "Increases Shield Strength by 20/25/30/35/40%, scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield this ATK increase effect is increased by 100%",
    "location": "Wish"
  },
  {
    "name": "Song of Broken Pines",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Song_of_Broken_Pines.png",
    "type": "Claymore",
    "rarity": "5",
    "atk": "49",
    "secondary": "Physical DMG Bonus",
    "passive": "Rebel\u2019s Banner Hymn",
    "bonus": "A part of the \"Millennial Movement\" that wanders amidst the winds. Increases ATK by 16/20/24/28/32%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s.\nWhen you possess four Sigils of Whispers, all of them will be consumed and all nearby party members will obtain the \"Millennial Movement: Banner-Hymn\" effect for 12s. \"Millennial Movement: Banner-Hymn\" increases Normal ATK SPD by 12/15/18/21/24% and increases ATK by 20/25/30/35/40%.\nOnce this effect is triggered, you will not gain Sigils of Whispers for 20s. Of the many effects of the \"Millennial Movement, \" buffs of the same type will not stack.",
    "location": "Wish"
  },
  {
    "name": "Skyward Pride",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Pride.png",
    "type": "Claymore",
    "rarity": "5",
    "atk": "48",
    "secondary": "Energy Recharge",
    "passive": "Sky-Ripping Dragon Spine",
    "bonus": "Increases all DMG by 8/10/12/14/16%. After using an Elemental Burst, Normal or Charged Attack, on hit, creates a vacuum blade that does 80/100/120/140/160% Physical DMG to enemies along its path. Lasts for 20s or 8 vacuum blades.",
    "location": "Wish"
  },
  {
    "name": "Redhorn Stonethresher",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Redhorn_Stonethresher.png",
    "type": "Claymore",
    "rarity": "5",
    "atk": "44",
    "secondary": "CRIT DMG",
    "passive": "Gokadaiou Otogibanashi",
    "bonus": "DEF is increased by 28/35/42/49/56%. Normal and Charged Attack DMG is increased by 40/50/60/70/80% of DEF.",
    "location": "Wish"
  },
  {
    "name": "Skyward Atlas",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Atlas.png",
    "type": "Catalyst",
    "rarity": "5",
    "atk": "48",
    "secondary": "ATK",
    "passive": "Wandering Clouds",
    "bonus": "Increases Elemental DMG Bonus by 12/15/18/21/24%. Normal Attack hits have a 50% chance to earn the favor of the clouds. which actively seek out nearby enemies to attack for 15s, dealing 160/200/240/280/320% ATK DMG. Can only occur once every 30s.",
    "location": "Wish"
  },
  {
    "name": "Lost Prayer to the Sacred Winds",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Lost_Prayer_to_the_Sacred_Winds.png",
    "type": "Catalyst",
    "rarity": "5",
    "atk": "44",
    "secondary": "CRIT Rate",
    "passive": "Boundless Blessing",
    "bonus": "Increases Movement SPD by 10%. When in battle, earn a 6/8/10/12/14% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.",
    "location": "Wish"
  },
  {
    "name": "Memory of Dust",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Memory_of_Dust.png",
    "type": "Catalyst",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "Golden Majesty",
    "bonus": "Increase Shield Strength by 20/25/30/35/40%. Scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.",
    "location": "Wish"
  },
  {
    "name": "Kagura's Verity",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Kagura's_Verity.png",
    "type": "Catalyst",
    "rarity": "5",
    "atk": "46",
    "secondary": "CRIT DMG",
    "passive": "Kagura Dance of the Sacred Sakura",
    "bonus": "Gains the Kagura Dance effect when using an Elemental Skill, causing the Elemental Skill DMG of the character wielding this weapon to increase by 12% for 16s. Max 3 stacks. This character will gain 12% All Elemental DMG Bonus when they possess 3 stacks.",
    "location": "Wish"
  },
  {
    "name": "Everlasting Moonglow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Everlasting_Moonglow.png",
    "type": "Catalyst",
    "rarity": "5",
    "atk": "46",
    "secondary": "HP",
    "passive": "Byakuya Kougetsu",
    "bonus": "Healing Bonus increased by 10/12.5/15/17.5/20%, Normal Attack DMG is increased by 1/1.5/2/2.5/3% of the Max HP of the character equipping this weapon. For 12s after using an Elemental Burst, Normal Attacks that hit opponents will restore 0.6 Energy. Energy can be restored this way once every 0.1s.",
    "location": "Wish"
  },
  {
    "name": "Thundering Pulse",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Thundering_Pulse.png",
    "type": "Bow",
    "rarity": "5",
    "atk": "46",
    "secondary": "CRIT DMG",
    "passive": "Passive",
    "bonus": "Increases ATK by 20/25/30/35/40% and grants the might of the Thunder Emblem. At stack levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by 12/24/40%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG (stack lasts 5s), casting Elemental Skill (stack lasts 10s); Energy is less than 100% (stack disappears when Energy is full). Each stack's duration is calculated independently.",
    "location": "Wish"
  },
  {
    "name": "Skyward Harp",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyward_Harp.png",
    "type": "Bow",
    "rarity": "5",
    "atk": "48",
    "secondary": "CRIT Rate",
    "passive": "Echoing Ballad",
    "bonus": "Increases CRIT DMG by 20/25/30/35/40%. Hits have a 60/70/80/90/100% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4/3.5/3/2.5/2s.",
    "location": "Wish"
  },
  {
    "name": "Polar Star",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Polar_Star.png",
    "type": "Bow",
    "rarity": "5",
    "atk": "46",
    "secondary": "CRIT Rate",
    "passive": "Daylight's Augury",
    "bonus": "Elemental Skill and Elemental Burst DMG increased by 12/15/18/21/24%. After a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst hits an opponent, 1 stack of Ashen Nightstar will be gained for 12s. When 1/2/3/4 stacks of Ashen Nightstar are present, ATK is increased by 10/20/30/48%. The stack of Ashen Nightstar created by the Normal Attack, Charged Attack, Elemental Skill or Elemental Burst will be counted independently of the others.",
    "location": "Wish"
  },
  {
    "name": "Elegy for the End",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Elegy_for_the_End.png",
    "type": "Bow",
    "rarity": "5",
    "atk": "46",
    "secondary": "Energy Recharge",
    "passive": "The Parting Realm",
    "bonus": "A part of the \"Millennial Movement\" that wanders amidst the winds. Increases Elemental Mastery by 60/75/90/105/120. When the Elemental Skills or Elemental Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once every 0.2s and can be triggered even if said character is not on the field. When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the \"Millennial Movement: Farewell Song\" effect for 12s. \"Millennial Movement: Farewell Song\" increases Elemental Mastery by 100/125/150/175/200 and increases ATK by 20/25/30/35/40%. Once this effect is triggered, you will not gain Sigils of Remembrance for 20s. Of the many effects of the \"Millennial Movement,\" buffs of the same type will not stack.",
    "location": "Wish"
  },
  {
    "name": "Amos' Bow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Amos'_Bow.png",
    "type": "Bow",
    "rarity": "5",
    "atk": "46",
    "secondary": "ATK",
    "passive": "Strong-Willed",
    "bonus": "Increases Normal Attack and Aimed Shot DMG by 12/15/18/21/24%. Increases DMG from arrows shot by a further 8/10/12/14/16% for every 0.1s that the arrow is in flight, up to 0.5s. Stacks up to 5 times on each arrow.",
    "location": "Wish"
  },
  {
    "name": "The Flute",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Flute.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Chord",
    "bonus": "Normal or Charged Attacks grant Harmonic on hits. Gaining 5 Harmonics triggers the power of music and deals 100/125/150/175/200% ATK DMG to surrounding enemies. Harmonics last up to 30s, and a maximum of 1 can be gained every 0.5s.",
    "location": "Wish"
  },
  {
    "name": "The Black Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Black_Sword.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT Rate",
    "passive": "Justice",
    "bonus": "Increases DMG dealt by Normal and Charged Attacks by 20/25/30/35/40%.\nAdditionally, regenerates 60/70/80/90/100% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.",
    "location": "BP Bounty"
  },
  {
    "name": "The Alley Flash",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Alley_Flash.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "45",
    "secondary": "Elemental Mastery",
    "passive": "Itinerant Hero",
    "bonus": "Increases DMG dealt by the character equipping this weapon by 12/15/18/21/24%. Taking DMG disables this effect for 5s.",
    "location": "Wish"
  },
  {
    "name": "Sword of Descension",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Sword_of_Descension.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "39",
    "secondary": "ATK",
    "passive": "-",
    "bonus": "Hitting enemies with Normal or Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66.",
    "location": "Wish"
  },
  {
    "name": "Sacrificial Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Sword.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "41",
    "secondary": "Energy Recharge",
    "passive": "Composed",
    "bonus": "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s.",
    "location": "Wish"
  },
  {
    "name": "Royal Longsword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Longsword.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Focus",
    "bonus": "Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Prototype Rancour",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Rancour.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "44",
    "secondary": "Physical DMG Bonus",
    "passive": "Smashed Stone",
    "bonus": "On hit, Normal or Charged Attacks increase Base ATK and DEF by 4/4.5/5/5.5/6% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
    "location": "Crafting"
  },
  {
    "name": "Lion's Roar",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Lion's_Roar.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Bane of Fire and Thunder",
    "bonus": "Increases DMG against enemies affected by Pyro or Electro by 20/24/28/32/36%.",
    "location": "Wish"
  },
  {
    "name": "Iron Sting",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Iron_Sting.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "Elemental Mastery",
    "passive": "Infusion Stinger",
    "bonus": "Dealing Elemental DMG increases all DMG by 6/7.5/9/10.5/12% for 6s. Max 2 stacks. Can only occur once every 1s.",
    "location": "Crafting"
  },
  {
    "name": "Festering Desire",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Festering_Desire.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "-",
    "bonus": "Increases Elemental Skill DMG by 16/20/24/28/32% and Elemental Skill CRIT Rate by 6/7.5/9/10.5/12%.",
    "location": "Event"
  },
  {
    "name": "Favonius Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Sword.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "41",
    "secondary": "Energy Recharge",
    "passive": "Windfall",
    "bonus": "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.",
    "location": "Wish"
  },
  {
    "name": "Cinnabar Spindle",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Cinnabar_Spindle.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "41",
    "secondary": "DEF",
    "passive": "Spotless Heart",
    "bonus": "Elemental Skill DMG is increased by 40/50/60/70/80% of DEF. The effect will be triggered no more than once every 1.5s and will be cleared 0.1s after the Elemental Skill deals DMG.",
    "location": "Event"
  },
  {
    "name": "Blackcliff Longsword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Longsword.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "44",
    "secondary": "CRIT DMG",
    "passive": "Press the Advantage",
    "bonus": "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Amenoma Kageuchi",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Amenoma_Kageuchi.png",
    "type": "Sword",
    "rarity": "4",
    "atk": "41",
    "secondary": "ATK",
    "passive": "Passive",
    "bonus": "After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 6 Energy for each seed consumed.",
    "location": "Crafting"
  },
  {
    "name": "The Catch",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Catch.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "Shanty",
    "bonus": "Increases Elemental Burst DMG by 16/20/24/28/32% and Elemental Burst CRIT Rate by 6/7.5/9/10.5/12%.",
    "location": "Vendor"
  },
  {
    "name": "Royal Spear",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Spear.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "44",
    "secondary": "ATK",
    "passive": "Focus",
    "bonus": "Upon damaging an opponent, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Prototype Grudge",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Grudge.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "Magic Affinity",
    "bonus": "After using an Elemental Skill, increases Normal and Charged Attack DMG by 8/10/12/14/16% for 12s. Max 2 stacks.",
    "location": "Crafting"
  },
  {
    "name": "Lithic Spear",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Lithic_Spear.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "44",
    "secondary": "ATK",
    "passive": "Lithic Axiom - Unity",
    "bonus": "For every characters who hails from Liyue, the characters who equips this weapon gains 7/8/9/10/11% ATK increase and a 3/4/5/6/7% CRIT Rate increase. This effect stacks up to 4 times.",
    "location": "Wish"
  },
  {
    "name": "Kitain Cross Spear",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Kitain_Cross_Spear.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "44",
    "secondary": "Elemental Mastery",
    "passive": "Passive",
    "bonus": "Increases Elemental Skill DMG by 6%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.",
    "location": "Crafting"
  },
  {
    "name": "Favonius Lance",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Lance.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "44",
    "secondary": "Energy Recharge",
    "passive": "Windfall",
    "bonus": "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.",
    "location": "Wish"
  },
  {
    "name": "Dragon's Bane",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Dragon's_Bane.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "41",
    "secondary": "Elemental Mastery",
    "passive": "Bane of Flame and Water",
    "bonus": "Increases DMG against enemies affected by Hydro or Pyro by 20/24/28/32/36%.",
    "location": "Wish"
  },
  {
    "name": "Dragonspine Spear",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Dragonspine_Spear.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "41",
    "secondary": "Physical DMG Bonus",
    "passive": "-",
    "bonus": "Hitting an opponent with Normal and Charged Attacks has a 60/70/80/90/100% chance of forming and dropping an Everfrost Icicle above them, dealing 80/95/110/125/140% AoE ATK DMG.\nOpponents affected by Cryo are dealt 200/240/280/320/360% ATK DMG. Can only occur once every 10s.",
    "location": "Crafting"
  },
  {
    "name": "Deathmatch",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Deathmatch.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "41",
    "secondary": "CRIT Rate",
    "passive": "Gladiator",
    "bonus": "If there are at least 2 opponents nearby, ATK is increased by 16/20/24/28/32% and DEF is increased by 16/20/24/28/32%. If there are less than 2 enemies nearby, ATK is increased by 24/30/36/42/48%.",
    "location": "BP Bounty"
  },
  {
    "name": "Crescent Pike",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Crescent_Pike.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "44",
    "secondary": "Physical DMG Bonus",
    "passive": "Infusion Needle",
    "bonus": "After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal an additional 20/25/30/35/40% ATK as DMG for 5s.",
    "location": "Crafting"
  },
  {
    "name": "Blackcliff Pole",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Pole.png",
    "type": "Polearm",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT DMG",
    "passive": "Press the Advantage",
    "bonus": "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Whiteblind",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Whiteblind.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "DEF",
    "passive": "Infusion Blade",
    "bonus": "On hit, Normal or Charged Attacks increase Base ATK and DEF by 6/7.5/9/10.5/12% for 6s. Max 4 stacks. Can only occur once every 0.5s.",
    "location": "Crafting"
  },
  {
    "name": "The Bell",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Bell.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "HP",
    "passive": "Rebellious Guardian",
    "bonus": "Taking DMG generates a shield which absorbs DMG up to 20/23/26/29/32% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by the shield, the character gains 12/15/18/21/24% increased DMG.",
    "location": "Wish"
  },
  {
    "name": "Snow-Tombed Starsilver",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Snow-Tombed_Starsilver.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "44",
    "secondary": "Physical DMG Bonus",
    "passive": "-",
    "bonus": "Hitting an opponent with Normal and Charged Attacks has a 60/70/80/90/100% chance of forming and dropping an Everfrost Icicle above them, dealing 80/95/110/125/140% AoE ATK DMG.\nOpponents affected by Cryo are dealt 200/240/280/320/360% ATK DMG. Can only occur once every 10s.",
    "location": "Crafting"
  },
  {
    "name": "Serpent Spine",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Serpent_Spine.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT Rate",
    "passive": "Wavesplitter",
    "bonus": "Every 4s a character is on the field, they will deal 6/7/8/9/10% more DMG and take 3/2.7/2.4/2.1/1.8% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG.",
    "location": "BP Bounty"
  },
  {
    "name": "Sacrificial Greatsword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Greatsword.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "44",
    "secondary": "Energy Recharge",
    "passive": "Composed",
    "bonus": "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s.",
    "location": "Wish"
  },
  {
    "name": "Royal Greatsword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Greatsword.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "43",
    "secondary": "ATK",
    "passive": "Focus",
    "bonus": "Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Rainslasher",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Rainslasher.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "Elemental Mastery",
    "passive": "Bane of Storm and Tide",
    "bonus": "Increases DMG against enemies affected by Hydro or Electro by 20/25/30/35/40%.",
    "location": "Wish"
  },
  {
    "name": "Prototype Aminus",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Aminus.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "44",
    "secondary": "ATK",
    "passive": "Crush",
    "bonus": "On hit, Normal or Charged Attacks have a 50% chance to deal an additional 240/300/360/420/480% ATK DMG to enemies within a small radius. Can only occur once every 15s.",
    "location": "Crafting"
  },
  {
    "name": "Luxurious Sea-Lord",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Luxurious_Sea-Lord.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "41",
    "secondary": "ATK",
    "passive": "Oceanic Victory",
    "bonus": "Increases Elemental Burst DMG by 12/15/18/21/24%. When Elemental Burst hits opponents, there is a 100% chance of summoning a titanic tuna that charges and deals 100/125/150/175/200% ATK as AoE DMG. This effect can occur once every 15s.",
    "location": "Event"
  },
  {
    "name": "Lithic Blade",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Lithic_Blade.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Lithic Axiom - Unity",
    "bonus": "For every characters who hails from Liyue, the characters who equips this weapon gains 7/8/9/10/11% ATK increase and a 3/4/5/6/7% CRIT Rate increase. This effect stacks up to 4 times.",
    "location": "Wish"
  },
  {
    "name": "Katsuragikiri Nagamasa",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Katsuragikiri_Nagamasa.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "Passive",
    "bonus": "Increases Elemental Skill DMG by 6/7.5/9/10.5/12%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 3/3.5/4/4.5/5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.",
    "location": "Crafting"
  },
  {
    "name": "Favonius Greatsword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Greatsword.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "41",
    "secondary": "Energy Recharge",
    "passive": "Windfall",
    "bonus": "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.",
    "location": "Wish"
  },
  {
    "name": "Blackcliff Slasher",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Slasher.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT DMG",
    "passive": "Press the Advantage",
    "bonus": "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Akuoumaru",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Akuoumaru.png",
    "type": "Claymore",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Watatsumi Wavewalker",
    "bonus": "For every point of the entire party's combined maximum Energy capacity, the Elemental Burst DMG of the character equipping this weapon is increased by 0.12/0.15/0.18/0.21/0.24%. A maximum of 40/50/60/70/80% increased Elemental Burst DMG can be achieved this way.",
    "location": "Wish"
  },
  {
    "name": "Wine and Song",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Wine_and_Song.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "Wind in the Square",
    "bonus": "For every character in the party who hails from Mondstadt, the character who equips this weapon gains 8/10/12/14/16% ATK increase and 3/3.5/4/4.5/5% Movement SPD increase.",
    "location": "Wish"
  },
  {
    "name": "The Widsith",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Widsith.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT DMG",
    "passive": "Debut",
    "bonus": "When a character takes the field, they will gain a random theme song for 10s. This can only occur once every 30s.\nRecitative: Increases Base ATK by 60/75/90/105/120%\nAria: Increases all Elemental DMG by 48/60/72/84/96%\nInterlude: Elemental Mastery is increased by 240/300/360/420/480",
    "location": "Wish"
  },
  {
    "name": "Solar Pearl",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Solar_Pearl.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT Rate",
    "passive": "Solar Shine",
    "bonus": "Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20/25/30/35/40% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20/25/30/35/40% for 6s.",
    "location": "BP Bounty"
  },
  {
    "name": "Sacrificial Fragments",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Fragments.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "41",
    "secondary": "Elemental Mastery",
    "passive": "Composed",
    "bonus": "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s.",
    "location": "Wish"
  },
  {
    "name": "Royal Grimoire",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Grimoire.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "44",
    "secondary": "ATK",
    "passive": "Focus",
    "bonus": "Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Prototype Amber",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Amber.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "HP",
    "passive": "Gilding",
    "bonus": "Using an Elemental Burst regenerates 4/4.5/5/5.5/6 Energy every 2s for 6s. Additionally, all party members will regenerate 4/4.5/5/5.5/6% HP every 2s for this duration.",
    "location": "Crafting"
  },
  {
    "name": "Oathsworn Eye",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Oathsworn_Eye.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "44",
    "secondary": "ATK",
    "passive": "People of the Faltering Light",
    "bonus": "Increases Energy Recharge by 24% for 10s after using an Elemental Skill.",
    "location": "Event"
  },
  {
    "name": "Mappa Mare",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Mappa_Mare.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "44",
    "secondary": "Elemental Mastery",
    "passive": "Infusion Scroll",
    "bonus": "Triggering an Elemental reaction grants a 8/10/12/14/16% Elemental DMG Bonus for 10s. Max 2 stacks.",
    "location": "Crafting"
  },
  {
    "name": "Hakushin Ring",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Hakushin_Ring.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "44",
    "secondary": "Energy Recharge",
    "passive": "Passive",
    "bonus": "After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 10% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.",
    "location": "Crafting"
  },
  {
    "name": "Frostbearer",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Frostbearer.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "-",
    "bonus": "Hitting an opponent with Normal and Charged Attacks has a 60/70/80/90/100% chance of forming and dropping an Everfrost Icicle above them, dealing 80/95/110/125/140% AoE ATK DMG.\nOpponents affected by Cryo are dealt 200/240/280/320/360% ATK DMG. Can only occur once every 10s.",
    "location": "Crafting"
  },
  {
    "name": "Favonius Codex",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Codex.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "Energy Recharge",
    "passive": "Windfall",
    "bonus": "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.",
    "location": "Wish"
  },
  {
    "name": "Eye of Perception",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Eye_of_Perception.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "41",
    "secondary": "ATK",
    "passive": "Echo",
    "bonus": "Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 240/270/300/330/360% ATK as DMG. This bolt can bounce between enemies a maximum of 4 times. This effect can occur once every 12/11/10/9/8s.",
    "location": "Wish"
  },
  {
    "name": "Dodoco Tales",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Dodoco_Tales.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "41",
    "secondary": "ATK",
    "passive": "Dodoventure!",
    "bonus": "Normal Attack hits on opponents increase Charged Attack DMG by 16/20/24/28/32% for 6s.\nCharged Attack hits on opponents increase ATK by 8/10/12/14/16% for 6s.",
    "location": "Event"
  },
  {
    "name": "Blackcliff Amulet",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Amulet.png",
    "type": "Catalyst",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT DMG",
    "passive": "Press the Advantage",
    "bonus": "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Windblume Ode",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Windblume_Ode.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "Elemental Mastery",
    "passive": "Windblume Wish",
    "bonus": "After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16/20/24/28/32% for 6s.",
    "location": "Invitation of Windblume Event"
  },
  {
    "name": "The Viridescent Hunt",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Viridescent_Hunt.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "CRIT Rate",
    "passive": "Verdant Wind",
    "bonus": "Upon hit, Normal and Aimed Shot Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding enemies, dealing 40/50/60/70/80% of ATK as DMG to these enemies every 0.5s for 4s. This effect can only occur once every 14/13/12/11/10s.",
    "location": "BP Bounty"
  },
  {
    "name": "The Stringless",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/The_Stringless.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "Elemental Mastery",
    "passive": "Arrowless Song",
    "bonus": "Increases Elemental Skill and Elemental Burst DMG by 24/30/36/42/48%.",
    "location": "Wish"
  },
  {
    "name": "Sacrificial Bow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Sacrificial_Bow.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "44",
    "secondary": "Energy Recharge",
    "passive": "Composed",
    "bonus": "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s.",
    "location": "Wish"
  },
  {
    "name": "Rust",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Rust.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Rapid Firing",
    "bonus": "Increases Normal Attack DMG by 40/50/60/70/80% but decreases Aimed Shot DMG by 8/9/10/11/12%",
    "location": "Wish"
  },
  {
    "name": "Royal Bow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Royal_Bow.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Focus",
    "bonus": "Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Prototype Crescent",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Prototype_Crescent.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Unreturning",
    "bonus": "Aimed Shot hits on weak points increase Movement SPD by 10% and ATK by 36/45/54/63/72% for 10s.",
    "location": "Crafting"
  },
  {
    "name": "Predator",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Predator.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "ATK",
    "passive": "Strong Strike",
    "bonus": "Dealing Cryo DMG to opponents increases this character's Normal and Charged Attack DMG by 10% for 6s. This effect can have a maximum of 2 stacks. Additionally, when Aloy equips Predator, ATK is increased by 66.",
    "location": "Event"
  },
  {
    "name": "Mitternachts Waltz",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Mitternachts_Waltz.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "42",
    "secondary": "Physical DMG Bonus",
    "passive": "Evernight Duet",
    "bonus": "Normal Attack hits on opponents increase Elemental Skill DMG by 20/25/30/35/40% for 5s. Elemental Skill hits on opponents increase Normal Attack DMG by 20/25/30/35/40% for 5s.",
    "location": "Wish"
  },
  {
    "name": "Hamayumi",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Hamayumi.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "41",
    "secondary": "ATK",
    "passive": "Passive",
    "bonus": "Increases Normal Attack DMG by 16% and Charged Attack DMG by 12%. When the equipping character's Energy reaches 100%, this effect is increased by 100%.",
    "location": "Crafting"
  },
  {
    "name": "Favonius Warbow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Favonius_Warbow.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "41",
    "secondary": "Energy Recharge",
    "passive": "Windfall",
    "bonus": "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s.",
    "location": "Wish"
  },
  {
    "name": "Compound Bow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Compound_Bow.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "41",
    "secondary": "Physical DMG Bonus",
    "passive": "Infusion Arrow",
    "bonus": "Normal Attack and Aimed Shot hits increase ATK by 4/5/6/7/8% and Normal Attack SPD by 1.2/1.5/1.8/2.1/2.4% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
    "location": "Crafting"
  },
  {
    "name": "Blackcliff Warbow",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Blackcliff_Warbow.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "44",
    "secondary": "CRIT DMG",
    "passive": "Press the Advantage",
    "bonus": "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
    "location": "Starglitter Exchange"
  },
  {
    "name": "Alley Hunter",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Alley_Hunter.png",
    "type": "Bow",
    "rarity": "4",
    "atk": "41",
    "secondary": "CRIT Rate",
    "passive": "Urban Guerrilla",
    "bonus": "Every 4s a character is on the field, their ATK increases by 4/5/6/7/8% and their CRIT DMG increases by 4/5/6/7/8%. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG.",
    "location": "Wish"
  },
  {
    "name": "Traveler's Handy Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Traveler's_Handy_Sword.png",
    "type": "Sword",
    "rarity": "3",
    "atk": "40",
    "secondary": "DEF",
    "passive": "Journey",
    "bonus": "Each Elemental Orb or Particle collected restores 1/1.25/1.5/1.75/2% HP.",
    "location": "Chest"
  },
  {
    "name": "Skyrider Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Skyrider_Sword.png",
    "type": "Sword",
    "rarity": "3",
    "atk": "38",
    "secondary": "Energy Recharge",
    "passive": "Determination",
    "bonus": "Using an Elemental Burst grants a 12/15/18/21/24% increase in ATK and Movement SPD for 12s.",
    "location": "Wish"
  },
  {
    "name": "Harbinger of Dawn",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Harbinger_of_Dawn.png",
    "type": "Sword",
    "rarity": "3",
    "atk": "39",
    "secondary": "CRIT DMG",
    "passive": "Vigorous",
    "bonus": "When HP is above 90%, increases CRIT Rate by 14/18/22/24/28%.",
    "location": "Wish"
  },
  {
    "name": "Fillet Blade",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Fillet_Blade.png",
    "type": "Sword",
    "rarity": "3",
    "atk": "39",
    "secondary": "ATK",
    "passive": "Gash",
    "bonus": "On hit, has 50% chance to deal 240/280/320/360/400% ATK DMG to a single enemy. Can only occur once every 15/14/13/12/11s.",
    "location": "Wish"
  },
  {
    "name": "Dark Iron Sword",
    "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Dark_Iron_Sword.png",
    "type": "Sword",
    "rarity": "3",
    "atk": "40",
    "secondary": "Elemental Mastery",
    "passive": "Overloaded",
    "bonus": "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, increases Base ATK by 20/25/30/35/40% for 12s.",
    "location": "Vendor"
  }
]

// {
//   "name": "Summit Shaper",
//   "icon": "https://rerollcdn.com/GENSHIN/Weapon/NEW/Summit_Shaper.png",
//   "type": "Sword",
//   "rarity": "5",
//   "atk": "46",
//   "secondary": "ATK",
//   "passive": "-",
//   "bonus": "Increases Shield Strength by 20/25/30/35/40%. Scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.",
//   "location": "Wish"
// }

const tableHead = ['Weapon', 'Type', 'Rarity', 'ATK', 'Secondary', 'Passive', 'Bonus', 'Location'];
const widthArr = [200, 80, 100, 80, 80, 170, 900, 70]

const tableData: string[][] = [];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222431',
    padding: 35,
    alignContent: 'flex-start',
  },
  scrollView: {
    flex: 0.5,
    backgroundColor: '#222431',
  },
  header: {
    height: 50,
    backgroundColor: '#1d1f29'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 21,
    /* identical to box height */
    color: '#FFFFFF',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 140,
    backgroundColor: '#272937',
    borderColor: '#1d1f29',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    elevation: 6,
  },
  boxImage: {
    width: 50,
    height: 'auto',
    marginRight: 10,
    backgroundColor: '#36384a',
    padding: 0,
    borderRadius: 4,
    elevation: 2,
  },
  boxWeapon: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 10,
  }
});

for (let i = 0; i < weapons.length; i++) {
  const weapon = weapons[i];
  const weaponData: any[] = [];
  weaponData.push(
    <View style={styles.boxWeapon}>
      <View style={styles.boxImage}>
        <Image source={{ uri: weapon.icon }} style={{ width: 50, height: 50 }} />
      </View>
      <Text style={{ width: 100, fontSize: 13, color: '#fff', flexWrap: 'wrap', }}>{weapon.name}</Text>
    </View >
  );
  weaponData.push(weapon.type);
  weaponData.push(weapon.rarity);
  weaponData.push(weapon.atk);
  weaponData.push(weapon.secondary);
  weaponData.push(weapon.passive);
  weaponData.push(weapon.bonus);
  weaponData.push(weapon.location);
  tableData.push(weaponData);
}

const Weapons: React.FC<WeaponsProps> = (props) => {
  return (
    <ScrollView style={styles.scrollView} horizontal>
      <View style={styles.container}>
        <Text>Weapons</Text>

        <View>
          <Table>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table>
              {
                tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={widthArr}
                    // height={100}
                    style={[styles.row, index % 2 ? { backgroundColor: '#222431' } : {}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Weapons;

