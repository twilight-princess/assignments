package main

import (
	"fmt"
)

func main() {
	for i := 1; i < 101; i++ {
		if i % 15 == 0 {
			fmt.Println("fizzBuzz")
		} else if i % 5 == 0 {
			fmt.Println("buzz")
		} else if i % 3 == 0 {
			fmt.Println("fizz")
		} else {
			fmt.Println(i)
		}
	}
}
