package calculator

import (
	"strings"
	"testing"

	"github.com/MarvinJWendt/testza"

	"github.com/Vilsol/go-pob/mod"
)

func TestParser(t *testing.T) {
	tests := []struct {
		line  string
		mods  []mod.Mod
		extra string
	}{
		{
			line:  "totally invalid mod",
			extra: "totally invalid mod",
		},
		{
			line:  "properties are doubled while in a breach",
			extra: "properties are doubled while in a breach",
		},
		{
			line: "Gain 5% of Cold Damage as Extra Chaos Damage",
			mods: []mod.Mod{mod.NewFloat("ColdDamageGainAsChaos", mod.TypeBase, 5)},
		},
		{
			line: "Axe Attacks deal 12% increased Damage with Ailments",
			mods: []mod.Mod{mod.NewFloat("Damage", mod.TypeIncrease, 12).Flag(mod.MFlagAxe).Flag(mod.MFlagAilment)},
		},
		{
			line: "Enemies Maimed by you take 10% increased Physical Damage",
			mods: []mod.Mod{mod.NewList("EnemyModifier", mod.EnemyModifier{Mod: mod.NewFloat("PhysicalDamageTaken", mod.TypeIncrease, 10).Tag(mod.Condition("Maimed"))})},
		},
		{
			line: "Brand Recall has 4% increased Cooldown Recovery Rate per Brand, up to a maximum of 40%",
			mods: []mod.Mod{mod.NewFloat("CooldownRecovery", mod.TypeIncrease, 4).Tag(mod.Multiplier("ActiveBrand").Limit(40).LimitTotal(true)).Tag(mod.SkillName("Brand Recall"))},
		},
		{
			line: "Damage Penetrates 6% Fire Resistance",
			mods: []mod.Mod{mod.NewFloat("FirePenetration", mod.TypeBase, 6)},
		},
		{
			line: "35% reduced Elemental Damage",
			mods: []mod.Mod{mod.NewFloat("ElementalDamage", mod.TypeIncrease, -35)},
		},
		{
			line: "10% more Damage if you've Killed Recently",
			mods: []mod.Mod{mod.NewFloat("Damage", mod.TypeMore, 10).Tag(mod.Condition("KilledRecently"))},
		},
		{
			line: "25% less Physical and Chaos Damage Taken while Sane",
			mods: []mod.Mod{
				mod.NewFloat("PhysicalDamageTaken", mod.TypeMore, -25).Tag(mod.Condition("Insane").Neg(true)),
				mod.NewFloat("ChaosDamageTaken", mod.TypeMore, -25).Tag(mod.Condition("Insane").Neg(true)),
			},
		},
		{
			line: "30% chance to Freeze Enemies which are Chilled",
			mods: []mod.Mod{mod.NewFloat("EnemyFreezeChance", mod.TypeBase, 30).Tag(mod.ActorCondition("enemy", "Chilled"))},
		},
		{
			line: "2.3% of Life Regenerated per Second if you've dealt a Critical Strike in the past 8 seconds",
			mods: []mod.Mod{mod.NewFloat("LifeRegenPercent", mod.TypeBase, 2.3).Tag(mod.Condition("CritInPast8Sec"))},
		},
		{
			line: "175 Life Regenerated per Second while in Blood Stance",
			mods: []mod.Mod{mod.NewFloat("LifeRegen", mod.TypeBase, 175).Tag(mod.Condition("BloodStance"))},
		},
		{
			line: "200 Cold Damage taken per second per Frenzy Charge while moving",
			mods: []mod.Mod{mod.NewFloat("ColdDegen", mod.TypeBase, 200).Tag(mod.Multiplier("FrenzyCharge")).Tag(mod.Condition("Moving"))},
		},
		{
			line: "14 to 26 Added Fire Damage with Bow Attacks",
			mods: []mod.Mod{
				mod.NewFloat("FireMin", mod.TypeBase, 14).Flag(mod.MFlagBow).Flag(mod.MFlagHit),
				mod.NewFloat("FireMax", mod.TypeBase, 26).Flag(mod.MFlagBow).Flag(mod.MFlagHit),
			},
		},
		{
			line: "Adds 10 to 38 Physical Damage to Attacks",
			mods: []mod.Mod{
				mod.NewFloat("PhysicalMin", mod.TypeBase, 10).KeywordFlag(mod.KeywordFlagAttack),
				mod.NewFloat("PhysicalMax", mod.TypeBase, 38).KeywordFlag(mod.KeywordFlagAttack),
			},
		},
		{
			line: "Adds 35 to 105 Lightning Damage to Spells",
			mods: []mod.Mod{
				mod.NewFloat("LightningMin", mod.TypeBase, 35).KeywordFlag(mod.KeywordFlagSpell),
				mod.NewFloat("LightningMax", mod.TypeBase, 105).KeywordFlag(mod.KeywordFlagSpell),
			},
		},
		{
			line: "Adds 13 to 16 Physical Damage to Attacks and Spells per Siphoning Charge",
			mods: []mod.Mod{
				mod.NewFloat("PhysicalMin", mod.TypeBase, 13).KeywordFlag(mod.KeywordFlagSpell).KeywordFlag(mod.KeywordFlagAttack).Tag(mod.Multiplier("SiphoningCharge")),
				mod.NewFloat("PhysicalMax", mod.TypeBase, 16).KeywordFlag(mod.KeywordFlagSpell).KeywordFlag(mod.KeywordFlagAttack).Tag(mod.Multiplier("SiphoningCharge")),
			},
		},
		{
			line: "Auras from your Skills grant +1% Physical Damage Reduction to you and Allies",
			mods: []mod.Mod{mod.NewList("ExtraAuraEffect", mod.ExtraAuraEffect{Mod: mod.NewFloat("PhysicalDamageReduction", mod.TypeBase, 1)})},
		},
		{
			line: "You and nearby Allies deal 30% increased Damage",
			mods: []mod.Mod{mod.NewList("ExtraAura", mod.ExtraAura{Mod: mod.NewFloat("Damage", mod.TypeIncrease, 30)})},
		},
		{
			line: "30% increased Minion Accuracy Rating",
			mods: []mod.Mod{mod.NewList("MinionModifier", mod.MinionModifier{Mod: mod.NewFloat("Accuracy", mod.TypeIncrease, 30)})},
		},
		{
			line: "Socketed Gems have 30% increased Reservation Efficiency",
			mods: []mod.Mod{mod.NewList("ExtraSkillMod", mod.ExtraSkillMod{Mod: mod.NewFloat("ReservationEfficiency", mod.TypeIncrease, 30)}).Tag(mod.SocketedIn("{SlotName}"))},
		},
	}
	for _, test := range tests {
		t.Run(test.line, func(t *testing.T) {
			entry := ParseMod(test.line, false)
			testza.AssertEqual(t, test.mods, entry.ModList)
			testza.AssertEqual(t, test.extra, strings.TrimSpace(entry.Extra))
		})
	}
}
