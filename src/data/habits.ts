import { Frequency, createId, Habit } from "@/utils/calculator";

export interface HabitData {
  slug: string;
  name: string;
  emoji: string;
  defaultInputs: {
    habits: { name: string; cost: number; frequency: Frequency }[];
  };
  seo: {
    title: string;
    metaDescription: string;
    h1: string;
    subheading: string;
  };
  content: {
    intro: string;
    body: string;
  };
}

export const habits: HabitData[] = [
  {
    slug: "coffee-cost-calculator",
    name: "Coffee",
    emoji: "☕",
    defaultInputs: {
      habits: [{ name: "Coffee", cost: 5, frequency: "daily" }],
    },
    seo: {
      title:
        "How Much Does Coffee Cost Over a Lifetime? (Shocking Results)",
      metaDescription:
        "Calculate the true lifetime cost of your daily coffee habit. A $5 latte could cost you over $500,000 when you factor in compound investment growth.",
      h1: "What Is Your Coffee Habit Really Costing You?",
      subheading:
        "That $5 latte adds up faster than you think — especially with compounding.",
    },
    content: {
      intro:
        "The average American spends between $3 and $7 on coffee every single day. Over a working lifetime of 30 to 40 years, that daily ritual represents far more than just the sticker price on your cup. When you factor in the opportunity cost — the money you could have invested and grown through compound returns — the true price of your coffee habit can reach staggering heights.",
      body: `## The Real Math Behind Your Morning Coffee

Most people don't think twice about their daily coffee run. It's just $5, right? But small, recurring expenses are deceptive. A $5 daily coffee costs you **$1,825 per year** in direct spending alone. Over 30 years, that's **$54,750** — enough for a down payment on a home in many markets.

### The Opportunity Cost Factor

The real shock comes when you consider what that money could have become if invested. At a conservative 7% annual return, that same $5 per day grows to over **$200,000** in 30 years. Over a full 40-year career, it can exceed **$400,000**.

### What You Can Do

This doesn't mean you have to give up coffee entirely. Understanding the true cost empowers you to make informed choices:

- **Brew at home** a few days per week to cut costs by 50-70%
- **Reduce frequency** — even skipping two days saves over $500/year
- **Downsize your order** — a drip coffee costs less than a specialty latte

### The Compound Effect

The power of compounding means that every dollar saved early in life has the greatest impact. A 25-year-old who redirects coffee money into investments gains far more than someone starting at 45. Use the calculator above to see exactly how your coffee habit stacks up over your specific time horizon.`,
    },
  },
  {
    slug: "smoking-cost-calculator",
    name: "Smoking",
    emoji: "🚬",
    defaultInputs: {
      habits: [{ name: "Cigarettes", cost: 12, frequency: "daily" }],
    },
    seo: {
      title:
        "How Much Does Smoking Cost Over a Lifetime? (The True Price)",
      metaDescription:
        "Calculate the true lifetime cost of smoking. A pack-a-day habit could cost you over $1 million with compound investment growth. See the shocking numbers.",
      h1: "What Is Smoking Really Costing You?",
      subheading:
        "The cost of smoking goes far beyond the pack — see the true lifetime price.",
    },
    content: {
      intro:
        "A pack of cigarettes costs between $7 and $14 depending on your state, with the national average hovering around $9. For a pack-a-day smoker spending $12 daily, the direct costs alone are staggering — but when you factor in what that money could have grown to through investing, the true cost of smoking can exceed one million dollars over a lifetime.",
      body: `## The Full Financial Cost of Smoking

Smoking is one of the most expensive daily habits a person can have. Beyond the well-known health consequences, the financial burden is enormous and often underestimated.

### Direct Spending Adds Up Fast

At $12 per day, a pack-a-day smoker spends **$4,380 per year**. Over 20 years, that's **$87,600** — the price of a luxury car or several years of college tuition. Over 40 years, direct spending alone reaches **$175,200**.

### The Investment Opportunity You're Burning

When you invest $4,380 per year at 7% average returns, the compound growth is dramatic:

- **10 years**: ~$63,000
- **20 years**: ~$190,000
- **30 years**: ~$440,000
- **40 years**: ~$960,000

That's nearly a million dollars from a single daily habit.

### Beyond Cigarettes: Hidden Costs

The calculator above focuses on direct spending, but smoking carries additional financial burdens: higher health insurance premiums, increased medical expenses, lower resale value on cars and homes, and reduced earning potential due to health issues.

### Quitting Pays Off Immediately

Every day you don't smoke, you save money. Use the comparison mode in the calculator to see how reducing or eliminating your habit changes your financial trajectory. Even cutting back by half can save you hundreds of thousands over time.`,
    },
  },
  {
    slug: "subscription-cost-calculator",
    name: "Subscriptions",
    emoji: "📺",
    defaultInputs: {
      habits: [
        { name: "Streaming", cost: 15, frequency: "monthly" },
        { name: "Gym", cost: 50, frequency: "monthly" },
      ],
    },
    seo: {
      title:
        "Subscription Cost Calculator — How Much Do Monthly Subscriptions Really Cost?",
      metaDescription:
        "Calculate the true lifetime cost of your subscriptions. Streaming, gym, apps — see how $65/month in subscriptions could cost over $150,000 with compound growth.",
      h1: "What Are Your Subscriptions Really Costing You?",
      subheading:
        "Streaming, gym memberships, apps — small monthly fees hide massive lifetime costs.",
    },
    content: {
      intro:
        "The average American spends over $200 per month on subscriptions — streaming services, gym memberships, software, meal kits, and more. Each subscription seems affordable on its own, but stacked together they become a significant financial commitment that most people never fully calculate.",
      body: `## The Subscription Trap: Death by a Thousand Cuts

Subscription services are designed to feel painless. A few dollars here, $15 there — it barely registers on your monthly statement. But that's exactly why subscriptions are so financially dangerous.

### How Subscriptions Stack Up

Consider a typical subscription stack:

- **Streaming services**: $15–$50/month (Netflix, Spotify, Disney+, etc.)
- **Gym membership**: $30–$80/month
- **Cloud storage**: $3–$15/month
- **Software subscriptions**: $10–$30/month
- **Meal kits or delivery**: $40–$100/month

Combined, it's easy to reach $150–$300 per month without realizing it.

### The Lifetime Impact

At $200/month ($2,400/year), subscriptions cost **$72,000** over 30 years in direct spending. With 7% compound growth, that same money could grow to over **$240,000**.

### The Audit Strategy

Subscription creep happens gradually. Try this quarterly audit:

1. **List every active subscription** — check bank and credit card statements
2. **Rate each one** — does it add genuine value to your life?
3. **Cut the bottom 20%** — cancel the ones you use least
4. **Invest the savings** — redirect the money to grow your wealth

### Use the Calculator to See Your Numbers

Stack your subscriptions in the calculator above to see their combined lifetime cost. The comparison mode lets you see how cutting just one or two services changes the picture dramatically.`,
    },
  },
  {
    slug: "alcohol-cost-calculator",
    name: "Alcohol",
    emoji: "🍺",
    defaultInputs: {
      habits: [{ name: "Alcohol", cost: 30, frequency: "weekly" }],
    },
    seo: {
      title:
        "Alcohol Cost Calculator — How Much Does Drinking Really Cost?",
      metaDescription:
        "Calculate the true lifetime cost of alcohol. Whether it's weekend drinks or daily beers, see how much your drinking habit really costs with compound growth.",
      h1: "How Much Is Alcohol Really Costing You?",
      subheading:
        "Weekend drinks, happy hours, and wine with dinner — the tab is bigger than you think.",
    },
    content: {
      intro:
        "Americans spend an average of $500 to $2,000 per year on alcohol, depending on their drinking habits. Whether you're a casual weekend drinker or enjoy a nightly glass of wine, the lifetime cost of alcohol — especially when you consider the investment opportunity cost — is far higher than most people realize.",
      body: `## The True Cost of Your Drinking Habit

Alcohol spending is easy to underestimate because it happens in many small transactions — a round at the bar, a bottle of wine at the store, drinks with dinner. But those small purchases compound into significant sums over time.

### Breaking Down the Numbers

A moderate drinking habit might look like this:

- **2 drinks at a bar/week**: ~$25/week
- **Wine or beer at home**: ~$15/week
- **Occasional nights out**: ~$50/month

That's roughly $200–$250 per month, or about **$2,600 per year**.

### The Long-Term Picture

At $30 per week ($1,560/year), alcohol costs **$46,800** over 30 years in direct spending. Invested at 7%, that same money could grow to over **$155,000**.

For heavier spenders at $60/week, double those numbers — you're looking at potential investment value exceeding **$300,000** over three decades.

### Cutting Back Without Cutting Out

You don't have to go completely dry to see massive financial benefits:

- **Drink at home instead of bars** — save 50-70% per drink
- **Designate alcohol-free days** — reducing by 2 days/week saves significantly
- **Choose cheaper alternatives** — house wine over premium cocktails

### Run Your Own Numbers

Use the calculator above to input your actual weekly alcohol spending and see the true cost over your specific time horizon. Try the comparison mode to see what cutting back by 50% could mean for your wealth.`,
    },
  },
  {
    slug: "fast-food-cost-calculator",
    name: "Fast Food",
    emoji: "🍔",
    defaultInputs: {
      habits: [{ name: "Fast food", cost: 12, frequency: "daily" }],
    },
    seo: {
      title:
        "Fast Food Cost Calculator — The True Price of Eating Out Daily",
      metaDescription:
        "Calculate the true lifetime cost of fast food. Daily drive-throughs and quick meals could cost you hundreds of thousands when factoring in compound growth.",
      h1: "How Much Is Fast Food Really Costing You?",
      subheading:
        "Drive-throughs and quick meals seem cheap — until you see the lifetime total.",
    },
    content: {
      intro:
        "The average American eats fast food 4 to 5 times per week, spending $10 to $15 per meal. What feels like a quick, convenient choice adds up to thousands per year — and when you factor in what that money could earn through investing, the true lifetime cost of fast food becomes eye-opening.",
      body: `## Fast Food: Convenience at a Hidden Cost

Fast food is engineered to be affordable and convenient. But the true cost extends far beyond the drive-through window when you measure it over years and decades.

### The Daily Fast Food Bill

A typical fast food meal now costs between $8 and $15, with combo meals often exceeding $12. If you eat fast food once a day — which many Americans do for lunch — that's roughly **$4,380 per year**.

### Comparing: Fast Food vs. Home Cooking

The cost difference is dramatic:

- **Fast food lunch**: $10–$15/meal
- **Packed lunch from home**: $3–$5/meal
- **Potential savings**: $5–$10/day, or **$1,825–$3,650/year**

### The Investment Angle

At $12/day, fast food spending invested at 7% could grow to:

- **10 years**: ~$63,000
- **20 years**: ~$190,000
- **30 years**: ~$440,000

That's the potential cost of daily fast food — nearly half a million dollars in lost wealth over a career.

### Smart Strategies

- **Meal prep on Sundays** — batch cooking saves time and money
- **Limit fast food to 1–2 times per week** instead of daily
- **Choose value menu items** when you do eat out
- **Track your spending** for one month to see your real number

### Calculate Your Real Cost

Enter your actual fast food spending in the calculator above. Stack it with other dining-out habits to see the full picture of how food spending shapes your financial future.`,
    },
  },
  {
    slug: "uber-cost-calculator",
    name: "Uber & Rideshare",
    emoji: "🚗",
    defaultInputs: {
      habits: [{ name: "Rideshare", cost: 25, frequency: "weekly" }],
    },
    seo: {
      title:
        "Uber Cost Calculator — How Much Do Rideshares Really Cost Over Time?",
      metaDescription:
        "Calculate the true lifetime cost of Uber and rideshare services. See how weekly rides could cost over $100,000 with compound investment growth.",
      h1: "How Much Are Uber and Rideshares Really Costing You?",
      subheading:
        "Tap, ride, pay — but what's the real price of rideshare convenience?",
    },
    content: {
      intro:
        "Rideshare services like Uber and Lyft have become a daily convenience for millions. Whether it's commuting, nights out, or airport trips, the average rideshare user spends $100 to $200 per month. Over a lifetime, those convenient rides represent a surprisingly large financial commitment — especially when you consider the investment alternative.",
      body: `## The Hidden Price of Rideshare Convenience

Rideshares feel like small, justified expenses — you need to get somewhere, and the app makes it effortless. But that ease comes at a premium when measured over time.

### What Rideshare Users Actually Spend

Typical rideshare spending patterns:

- **Daily commuters**: $15–$30/ride, 2x/day = $150–$300/week
- **Weekend users**: $20–$40/week on social rides
- **Occasional users**: $50–$100/month for errands and events

Even moderate users spending $25/week are paying **$1,300 per year** on rides.

### The Lifetime Cost of Rideshares

At $25/week invested at 7% annual returns:

- **10 years**: ~$19,000
- **20 years**: ~$57,000
- **30 years**: ~$132,000

For daily commuters spending $200/week, those numbers multiply by 8x — potentially exceeding **$1 million** over a career.

### Alternatives Worth Considering

- **Public transit** — monthly passes cost a fraction of daily rideshares
- **Biking or walking** for short trips — free and healthy
- **Carpooling** — split costs with coworkers or friends
- **A used car** — may be cheaper than daily rideshares over time

### See Your Rideshare Reality

Input your actual weekly rideshare spending in the calculator above to see the true cost. Compare scenarios to see how even reducing rides by a few per week changes your long-term financial picture.`,
    },
  },
  {
    slug: "gym-membership-cost-calculator",
    name: "Gym Membership",
    emoji: "💪",
    defaultInputs: {
      habits: [{ name: "Gym membership", cost: 50, frequency: "monthly" }],
    },
    seo: {
      title:
        "Gym Membership Cost Calculator — Is Your Gym Worth the Price?",
      metaDescription:
        "Calculate the true lifetime cost of your gym membership. See if that $50/month fee is worth it when you factor in compound investment growth over decades.",
      h1: "What Is Your Gym Membership Really Costing You?",
      subheading:
        "Health is priceless — but is your gym membership the best way to invest in it?",
    },
    content: {
      intro:
        "The average gym membership costs between $30 and $80 per month, with premium gyms charging $100 or more. While fitness is crucial for long-term health, many gym members don't use their membership enough to justify the cost. Understanding the true lifetime price helps you decide whether your gym is the right investment.",
      body: `## Gym Memberships: A Health Investment or Money Drain?

Unlike most habits in this calculator, a gym membership can provide genuine health returns. But the financial question is whether you're getting value proportional to what you're paying.

### The Numbers Behind Gym Spending

- **Budget gyms**: $10–$30/month (Planet Fitness, etc.)
- **Mid-range gyms**: $40–$80/month
- **Premium gyms**: $100–$200+/month (Equinox, boutique studios)

At $50/month, a gym membership costs **$600/year** or **$18,000** over 30 years.

### The Opportunity Cost

$50/month invested at 7% grows to:

- **10 years**: ~$8,600
- **20 years**: ~$26,000
- **30 years**: ~$60,000

That's significant — but only matters if you're not actually using the gym.

### Are You Getting Your Money's Worth?

Studies show that **67% of gym memberships go unused**. If you visit fewer than 8 times per month, you're paying more than $6 per visit — and likely could find cheaper alternatives.

### Cost-Effective Fitness Alternatives

- **Home workouts** — bodyweight exercises, resistance bands, YouTube videos
- **Running or cycling** — free cardio with fresh air
- **Budget gyms** — $10–$20/month covers basic equipment
- **Pay-per-visit options** — only pay when you actually go

### Calculate Your Gym's True Cost

Use the calculator above to see the lifetime cost of your specific membership fee. If you're paying for a gym you rarely use, the comparison mode shows what redirecting those funds could mean for your wealth.`,
    },
  },
  {
    slug: "takeaway-food-cost-calculator",
    name: "Takeaway Food",
    emoji: "🥡",
    defaultInputs: {
      habits: [{ name: "Takeaway dinner", cost: 35, frequency: "weekly" }],
    },
    seo: {
      title:
        "Takeaway Food Cost Calculator — How Much Does Ordering In Really Cost?",
      metaDescription:
        "Calculate the true lifetime cost of ordering takeaway food. Weekly delivery orders could cost you over $200,000 with compound investment growth.",
      h1: "How Much Is Takeaway Food Really Costing You?",
      subheading:
        "Delivery apps make ordering easy — but the lifetime cost might surprise you.",
    },
    content: {
      intro:
        "The rise of food delivery apps has made ordering takeaway easier than ever. The average order on platforms like DoorDash or Uber Eats runs $25 to $45 after fees and tips. For households ordering takeaway multiple times per week, the annual cost can easily exceed $5,000 — and the opportunity cost is even higher.",
      body: `## The True Price of Takeaway Convenience

Food delivery has exploded in popularity, but convenience comes at a steep markup. Between menu upcharges, delivery fees, service fees, and tips, a takeaway meal often costs 30-50% more than the same meal eaten in-restaurant.

### The Hidden Markup on Delivery

A typical takeaway order breakdown:

- **Food cost**: $20–$30
- **Delivery fee**: $3–$8
- **Service fee**: $2–$5
- **Tip**: $3–$7
- **Total**: $28–$50 per order

### Weekly Takeaway Spending

At $35/week (one order), you spend **$1,820/year**. Many households order 2-3 times per week, pushing annual spending to **$3,640–$5,460**.

### The Long-Term Impact

$35/week invested at 7% annual returns:

- **10 years**: ~$26,000
- **20 years**: ~$80,000
- **30 years**: ~$185,000

For families ordering 3x/week at $35 each, the potential invested value exceeds **$550,000** over 30 years.

### Smarter Takeaway Strategies

- **Limit delivery to once per week** — make it a treat, not a default
- **Pick up instead of delivery** — save $5–$15 per order on fees
- **Cook in batches** — Sunday meal prep eliminates weeknight temptation
- **Use restaurant loyalty programs** — get discounts on orders you'd place anyway

### See Your Delivery Habit's True Cost

Enter your weekly takeaway spending in the calculator above to see the real numbers. Stack it with other food habits to understand your total dining-out cost over time.`,
    },
  },
  {
    slug: "online-shopping-cost-calculator",
    name: "Online Shopping",
    emoji: "🛍️",
    defaultInputs: {
      habits: [
        { name: "Online shopping", cost: 75, frequency: "monthly" },
      ],
    },
    seo: {
      title:
        "Online Shopping Cost Calculator — The True Price of Impulse Buying",
      metaDescription:
        "Calculate the true lifetime cost of online shopping habits. See how monthly impulse purchases could cost you over $100,000 with compound investment growth.",
      h1: "How Much Is Online Shopping Really Costing You?",
      subheading:
        "One-click ordering and free shipping make spending dangerously easy.",
    },
    content: {
      intro:
        "Online shopping has removed nearly every friction point between wanting something and buying it. The average American spends over $5,000 per year on online purchases, with a significant portion being impulse buys. Understanding the true lifetime cost of discretionary online spending can help you separate needs from wants.",
      body: `## The Psychology of Online Spending

E-commerce platforms are optimized to make you spend. One-click buying, personalized recommendations, flash sales, and free shipping thresholds all drive impulse purchases that add up quickly.

### How Much Are You Really Spending?

Common online shopping patterns:

- **Amazon impulse buys**: $50–$150/month
- **Clothing and fashion**: $50–$200/month
- **Gadgets and electronics**: $30–$100/month
- **Home and lifestyle items**: $25–$75/month

Many shoppers spend $75–$300/month on discretionary online purchases without realizing it.

### The Lifetime Price of Impulse Buying

At $75/month ($900/year) invested at 7%:

- **10 years**: ~$13,000
- **20 years**: ~$39,000
- **30 years**: ~$91,000

At $200/month, those numbers nearly triple — approaching **$250,000** over 30 years.

### Breaking the Impulse Cycle

- **Implement a 48-hour rule** — wait two days before buying anything non-essential
- **Unsubscribe from marketing emails** — remove the triggers
- **Delete saved payment methods** — add friction to the buying process
- **Track every purchase for 30 days** — awareness alone reduces spending
- **Set a monthly discretionary budget** — and stick to it

### Calculate Your Shopping Habit's True Cost

Enter your monthly online shopping spending in the calculator above. Be honest about what's truly discretionary. The results may motivate you to redirect some of that spending toward building long-term wealth.`,
    },
  },
  {
    slug: "energy-drinks-cost-calculator",
    name: "Energy Drinks",
    emoji: "⚡",
    defaultInputs: {
      habits: [{ name: "Energy drinks", cost: 4, frequency: "daily" }],
    },
    seo: {
      title:
        "Energy Drink Cost Calculator — How Much Does Your Energy Habit Cost?",
      metaDescription:
        "Calculate the true lifetime cost of energy drinks. A daily $4 energy drink could cost you over $300,000 with compound investment growth.",
      h1: "How Much Are Energy Drinks Really Costing You?",
      subheading:
        "That daily boost comes with a bigger price tag than you'd expect.",
    },
    content: {
      intro:
        "Energy drinks have become a daily staple for millions. At $3 to $5 per can, a daily energy drink habit costs $1,100 to $1,825 per year. But the true cost — including what that money could have earned through investing — reveals that your daily energy boost carries a surprisingly heavy financial price tag.",
      body: `## The Growing Cost of Energy Drinks

The energy drink market has exploded, with brands like Red Bull, Monster, and Celsius becoming part of daily routines. But at premium prices compared to alternatives like coffee, the financial impact is significant.

### Daily Energy Drink Spending

- **Single can/day**: $3–$5 = $1,095–$1,825/year
- **Two cans/day**: $6–$10 = $2,190–$3,650/year
- **Premium brands**: $5–$7/can = up to $2,555/year

### The Investment Comparison

At $4/day invested at 7% annual returns:

- **10 years**: ~$21,000
- **20 years**: ~$63,000
- **30 years**: ~$146,000
- **40 years**: ~$319,000

Over a career, your energy drink habit could cost you more than **$300,000** in potential wealth.

### Cheaper Energy Alternatives

- **Coffee** — $0.50–$1.00 per cup brewed at home vs. $4+ for energy drinks
- **Green tea** — pennies per cup with natural caffeine
- **Better sleep habits** — address the root cause of fatigue
- **B-vitamin supplements** — a fraction of the cost of daily energy drinks

### Energy Drinks vs. Coffee: The Cost Comparison

A daily energy drink at $4 costs **$1,460/year**. A daily home-brewed coffee at $0.75 costs **$274/year**. The difference — $1,186/year — invested over 30 years at 7% grows to over **$119,000**.

### Run the Numbers Yourself

Use the calculator above to input your exact energy drink spending and see the true lifetime cost. Try adding it alongside other daily habits to see the combined impact on your financial future.`,
    },
  },
];

/** Quick lookup by slug */
export const habitsBySlug: Record<string, HabitData> = Object.fromEntries(
  habits.map((h) => [h.slug, h])
);

/** Get all slugs for static generation */
export function getAllSlugs(): string[] {
  return habits.map((h) => h.slug);
}

/** Convert habit data's default inputs to Calculator-ready Habit objects */
export function getDefaultHabits(data: HabitData): Habit[] {
  return data.defaultInputs.habits.map((h) => ({
    id: createId(),
    name: h.name,
    cost: h.cost,
    frequency: h.frequency,
  }));
}
