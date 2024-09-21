package main

import (
	"fmt"
	"strconv"
)

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
	perform  func(values CalcValues) float32
}

type CalcValues map[CalculationType]float32

type CalcFunc func(values CalcValues) float32

// #WeaponAttackSpeedStat, #BaseAttackSpeedMods = BaseAttackSpeed
// #AttackSpeedMods, ProcessingSpecialAttackSpeedMods() = AttackSpeedMods()
// BaseAttackSpeed(), #LocalAttackSpeedMods, AttackSpeedMods() = AttackSpeed

var calculations = map[CalculationType]Calculation{
	BaseAttackSpeed: {
		required: []CalculationType{
			WeaponAttackSpeedStat, BaseAttackSpeedMods,
		},
		perform: func(values CalcValues) float32 {
			return values[WeaponAttackSpeedStat] * values[BaseAttackSpeedMods]
		},
	},

	AttackSpeedMods: {
		perform: func(values CalcValues) float32 {
			return 2
		},
	},

	FinalAttackSpeed: {
		required: []CalculationType{
			AttackSpeedMods, BaseAttackSpeed,
		},
		perform: func(values CalcValues) float32 {
			return values[AttackSpeedMods] * values[BaseAttackSpeed]
		},
	},
}

var values = map[CalculationType]float32{
	WeaponAttackSpeedStat: 1.5,
	BaseAttackSpeedMods:   1.1,
}

func getHasValueFunc(values map[CalculationType]float32) func(reqCalc CalculationType) bool {
	return func(reqCalc CalculationType) bool {
		_, isPresent := values[reqCalc]
		return isPresent
	}
}

func performCalculation(desiredCalc CalculationType, values map[CalculationType]float32) float32 {
	hasValue := getHasValueFunc(values)
	remaining := make([]CalculationType, 0, 10)
	remaining = append(remaining, desiredCalc)

	//fmt.Println("Length of remaining: " + strconv.Itoa(len(remaining)))
	for len(remaining) > 0 {
		calc := remaining[len(remaining)-1]
		//fmt.Println("--                     --")
		//fmt.Println("Processing " + strconv.Itoa(int(calc)))
		//fmt.Println(values)
		//fmt.Println(remaining)

		_, isPresent := values[calc]
		if !isPresent {
			calculation := calculations[calc]
			if every(calculation.required, hasValue) {
				values[calc] = calculation.perform(values)
			} else {
				required := filter(calculation.required, func(reqCalc CalculationType) bool {
					return !hasValue(reqCalc)
				})
				remaining = append(remaining, required...)
				continue
			}
		}

		remaining = remaining[:len(remaining)-1]
	}

	return values[desiredCalc]
}

func main() {
	fmt.Println("AttackSpeed is: " + strconv.FormatFloat(float64(performCalculation(FinalAttackSpeed, values)), 'f', 3, 32))
}
