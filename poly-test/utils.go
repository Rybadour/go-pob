package main

func every[T any](ts []T, pred func(T) bool) bool {
	for _, t := range ts {
		if !pred(t) {
			return false
		}
	}
	return true
}

func filter[T any](ts []T, pred func(T) bool) []T {
	newTs := make([]T, 0, len(ts))
	for _, t := range ts {
		if pred(t) {
			newTs = append(newTs, t)
		}
	}
	return newTs
}
