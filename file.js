function timeInWords(h, m) {
    // Write your code here
    const nums =[
    "", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen","seventeen",
    "eighteen", "nineteen", "twenty","twenty one",
    "twenty two", "twenty three", "twenty four",
    "twenty five", "twenty six", "twenty seven",
    "twenty eight", "twenty nine",
    ];
    let oclock = " o' clock", answer = "";
    if (m == 0) answer = nums[h] + oclock;
    else if (m == 15) answer = "quarter past " + nums[h];
    else if (m == 45) answer = "quarter to " + nums[h+1];
    else if (m == 30) answer = "half past " + nums[h];
    else if (m == 1) answer = nums[m] + " minute past " + nums[h];
    else if (m >= 1 && m < 30 && m != 15) answer = nums[m] + " minutes past " + nums[h];
    else if (m > 30 && m <= 59 && m != 45)answer = nums[60-m] + " minutes to " +nums[h+1];
    return answer;
}
