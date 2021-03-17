const weeklyHrs = 40
const day1 = null
const day2 = null
const day3 = null
const day4 = null

if (!day2) {
  console.log(`Weekly hours: ${weeklyHrs} \n\n1st day: ${day1} hr \n\nIn total: ${day1+day2+day3+day4} hr \n\n1 more day: ${(weeklyHrs-day1)} hr \n2 more days: ${(weeklyHrs-day1)/2} hr \n3 more days: ${(weeklyHrs-day1)/3} hr \n4 more days: ${(weeklyHrs-day1)/4} hr \n5 more days: ${(weeklyHrs-day1)/5} hr`)
} else if (!day3) {
  console.log(`Weekly hours: ${weeklyHrs} hr \n\n1st day: ${day1} hr \n2nd day: ${day2} hr \n\nIn total: ${day1+day2+day3+day4} hr \n\n1 more day: ${(weeklyHrs-day1-day2)} hr \n2 more days: ${(weeklyHrs-day1-day2)/2} hr \n3 more days: ${(weeklyHrs-day1-day2)/3} hr \n4 more days: ${(weeklyHrs-day1-day2)/4} hr`)
} else if (!day4) {
  console.log(`Weekly hours: ${weeklyHrs} hr \n\n1st day: ${day1} hr \n2nd day: ${day2} hr \n3rd day: ${day3} hr \n\nIn total: ${day1+day2+day3+day4} hr \n\n1 more day: ${(weeklyHrs-day1-day2-day3)} hr \n2 more days: ${(weeklyHrs-day1-day2-day3)/2} hr \n3 more days: ${(weeklyHrs-day1-day2-day3)/3} hr`)
} else {
  console.log(`Weekly hours: ${weeklyHrs} hr \n\n1st day: ${day1} hr \n2nd day: ${day2} hr \n3rd day: ${day3} hr \n4th day: ${day4} hr \n\nIn total: ${day1+day2+day3+day4} hr \n\n1 more day: ${(weeklyHrs-day1-day2-day3-day4)} hr \n2 more days: ${(weeklyHrs-day1-day2-day3-day4)/2} hr`)
}
