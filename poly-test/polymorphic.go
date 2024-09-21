package main

import "fmt"

type CalculationType int
const (
	BaseAttackSpeed CalculationType = iota
	AttackSpeedMods
	FinalAttackSpeed

	// Static Values like Gear, Passives, etc.
	WeaponAttackSpeedStat
	BaseAttackSpeedMods
)

type Calculation struct {
	required []CalculationType
}

type CalcValues map[CalculationType]float32

type CalcFunc func (values CalcValues) float32

// #WeaponAttackSpeedStat, #BaseAttackSpeedMods = BaseAttackSpeed
// #AttackSpeedMods, ProcessingSpecialAttackSpeedMods() = AttackSpeedMods()
// BaseAttackSpeed(), #LocalAttackSpeedMods, AttackSpeedMods() = AttackSpeed

var calculations = map[CalculationType]CalcFunc {
	BaseAttackSpeed: func(values CalcValues) float32 {
		return values[WeaponAttackSpeedStat] * values[BaseAttackSpeedMods];
	},
	AttackSpeedMods: func(values CalcValues) float32 {
		return 1
	},
	FinalAttackSpeed: func(values CalcValues) float32 {
		return values[AttackSpeedMods] * values[BaseAttackSpeed];
	},
};

var required = map[CalculationType][]CalculationType {
	BaseAttackSpeed: [WeaponAttackSpeedStat, BaseAttackSpeedMods],
}

var values = make(map[CalculationType]float32)
values[WeaponAttackSpeedStat] := 1.5
values[BaseAttackSpeedMods] := 1.1 // 10%


func main() {
	fmt.Println("Testing")
}