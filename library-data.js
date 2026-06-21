// ══════════════════════════════════════════════════════════════════════════════
//  Trends & Trade — Library Content Data
//  Edit this file to add / update topic content.
//  Each topic can have a `content` array of blocks:
//    { type:'image',     src:'images/SNRTA001.jpg', alt:'...' }
//    { type:'heading',   text:'...' }
//    { type:'paragraph', text:'...' }
//    { type:'list',      items:['...','...'] }
//    { type:'callout',   text:'...' }
//    { type:'svg',       id:'svg-element-id', caption:'...' }
//  Topics without a `content` array automatically show "Coming Soon".
// ══════════════════════════════════════════════════════════════════════════════

const LIBRARY = [
  // ── STOCKS ─────────────────────────────────────────────────────────────────
  {
    id: 'stocks', icon: '📈', title: 'Stocks',
    desc: 'Stock market basics, PSX, global exchanges, IPOs, dividends, and investing concepts.',
    topics: [
      { id: 'what-is-stock-market',       title: 'What is the Stock Market?',                       level: 'Beginner',     summary: 'An introduction to stock markets, how they work, and why they exist.' },
      { id: 'how-stock-exchanges-work',   title: 'How Stock Exchanges Work',                        level: 'Beginner',     summary: 'Understanding the mechanics of stock exchanges and trading platforms.' },
      { id: 'primary-vs-secondary',       title: 'Primary vs Secondary Market',                     level: 'Beginner',     summary: 'The difference between where stocks are first issued and where they are traded.' },
      { id: 'what-is-ipo',                title: 'What is an IPO?',                                 level: 'Beginner',     summary: 'How companies go public and what an IPO means for investors.' },
      { id: 'shares-equity-ownership',    title: 'Shares, Equity, and Ownership',                   level: 'Beginner',     summary: 'Understanding what owning a share really means.' },
      { id: 'investor-vs-trader',         title: 'Investor vs Trader',                              level: 'Beginner',     summary: 'Key differences in mindset, strategy, and time horizon.' },
      { id: 'fa-beginners-stocks',        title: 'Fundamental Analysis for Beginners',              level: 'Beginner',     summary: 'A starter guide to evaluating stocks using financial data.' },
      { id: 'ta-beginners-stocks',        title: 'Technical Analysis for Beginners',                level: 'Beginner',     summary: 'Using charts and price action to make trading decisions.' },
      { id: 'what-is-eps',                title: 'What is EPS and Why It Matters?',                 level: 'Beginner',     summary: 'Earnings Per Share explained and why investors watch it closely.' },
      { id: 'understanding-pe-ratio',     title: 'Understanding P/E Ratio',                         level: 'Beginner',     summary: 'How to interpret the Price-to-Earnings ratio when evaluating stocks.' },
      { id: 'dividend-yield',             title: 'Dividend Yield Explained',                        level: 'Beginner',     summary: 'What dividends are and how to calculate dividend yield.' },
      { id: 'market-cap',                 title: 'Market Capitalization',                           level: 'Beginner',     summary: 'Small cap, mid cap, and large cap stocks — what the differences mean.' },
      { id: 'financial-statements-intro', title: 'Understanding Financial Statements',              level: 'Intermediate', summary: 'Reading the balance sheet, income statement, and cash flow statement.' },
      { id: 'snr-stocks',                 title: 'Support and Resistance in Stock Trading',         level: 'Intermediate', summary: 'Applying S&R principles to stock chart analysis.' },
      { id: 'risk-management-stocks',     title: 'Risk Management in Stock Market',                 level: 'Intermediate', summary: 'Protecting capital and managing downside in stock trading.' },
    ]
  },

  // ── COMMODITIES ────────────────────────────────────────────────────────────
  {
    id: 'commodities', icon: '🥇', title: 'Commodities',
    desc: 'Gold, silver, oil, supply and demand, inflation, and safe-haven assets.',
    topics: [
      { id: 'what-are-commodities',       title: 'What are Commodities?',                          level: 'Beginner',     summary: 'An overview of commodity markets and the assets traded within them.' },
      { id: 'hard-vs-soft',               title: 'Hard vs Soft Commodities',                       level: 'Beginner',     summary: 'The difference between mined and grown commodities.' },
      { id: 'intro-gold-trading',         title: 'Introduction to Gold Trading',                   level: 'Beginner',     summary: 'How gold is traded, why it matters, and how to get started.' },
      { id: 'intro-silver-trading',       title: 'Introduction to Silver Trading',                 level: 'Beginner',     summary: 'Silver as an industrial and precious metal — trading the white metal.' },
      { id: 'intro-oil-trading',          title: 'Introduction to Crude Oil Trading',              level: 'Beginner',     summary: 'How crude oil markets work and what drives price movements.' },
      { id: 'factors-gold-prices',        title: 'Factors Affecting Gold Prices',                  level: 'Intermediate', summary: 'The key drivers behind gold price movements.' },
      { id: 'factors-oil-prices',         title: 'Factors Affecting Oil Prices',                   level: 'Intermediate', summary: 'Supply, demand, geopolitics, and OPEC\'s role in oil pricing.' },
      { id: 'commodity-cycles',           title: 'Commodity Market Cycles',                        level: 'Intermediate', summary: 'Understanding the cyclical nature of commodity markets.' },
      { id: 'inflation-commodities',      title: 'Inflation and Its Impact on Commodities',        level: 'Intermediate', summary: 'Why commodities often rise during inflationary periods.' },
      { id: 'safe-haven-assets',          title: 'Safe Haven Assets Explained',                    level: 'Beginner',     summary: 'Assets that hold value during market uncertainty.' },
      { id: 'supply-demand-commodities',  title: 'Supply and Demand in Commodity Markets',         level: 'Beginner',     summary: 'How supply and demand fundamentals drive commodity prices.' },
      { id: 'commodity-futures',          title: 'Commodity Futures Explained',                    level: 'Intermediate', summary: 'What futures contracts are and how they work in commodity markets.' },
      { id: 'spot-vs-futures-commodity',  title: 'Spot vs Futures Commodity Trading',              level: 'Intermediate', summary: 'The difference between spot price and futures contracts.' },
    ]
  },

  // ── CRYPTO ─────────────────────────────────────────────────────────────────
  {
    id: 'crypto', icon: '₿', title: 'Crypto',
    desc: 'Bitcoin, Ethereum, blockchain, wallets, exchanges, leverage, liquidation, and crypto risk.',
    topics: [
      { id: 'what-is-crypto',             title: 'What is Cryptocurrency?',                        level: 'Beginner',     summary: 'A beginner-friendly introduction to digital currencies.' },
      { id: 'bitcoin-explained',          title: 'Bitcoin Explained for Beginners',                level: 'Beginner',     summary: 'The origin, purpose, and mechanics of Bitcoin.' },
      { id: 'ethereum-smart-contracts',   title: 'Ethereum and Smart Contracts',                   level: 'Beginner',     summary: 'How Ethereum works and what smart contracts enable.' },
      { id: 'coins-vs-tokens',            title: 'Coins vs Tokens',                                level: 'Beginner',     summary: 'The difference between native coins and project tokens.' },
      { id: 'what-is-blockchain',         title: 'What is Blockchain?',                            level: 'Beginner',     summary: 'The technology underpinning all cryptocurrencies.' },
      { id: 'cex-vs-dex',                 title: 'Centralized vs Decentralized Exchanges',         level: 'Beginner',     summary: 'Understanding CEX and DEX trading platforms.' },
      { id: 'spot-vs-futures-crypto',     title: 'Spot vs Futures Trading in Crypto',              level: 'Intermediate', summary: 'Key differences and which suits your risk profile.' },
      { id: 'leverage-crypto',            title: 'Leverage in Crypto Trading',                     level: 'Intermediate', summary: 'How leverage amplifies both gains and losses in crypto.' },
      { id: 'liquidation-crypto',         title: 'Liquidation in Crypto Futures',                  level: 'Intermediate', summary: 'What liquidation means and how to avoid it.' },
      { id: 'crypto-wallets',             title: 'Crypto Wallets: Hot vs Cold',                    level: 'Beginner',     summary: 'Keeping your crypto safe — online vs offline storage.' },
      { id: 'stablecoins',                title: 'Stablecoins: USDT, USDC and Their Role',         level: 'Beginner',     summary: 'How stablecoins work and why traders use them.' },
      { id: 'market-sentiment-crypto',    title: 'Market Sentiment in Crypto',                     level: 'Intermediate', summary: 'How crowd psychology drives crypto price cycles.' },
      { id: 'fear-greed-index',           title: 'Fear and Greed Index Explained',                 level: 'Beginner',     summary: 'Using sentiment indicators to time market entries.' },
      { id: 'crypto-risk-management',     title: 'Crypto Risk Management for Beginners',           level: 'Beginner',     summary: 'Protecting your capital in the volatile crypto market.' },
    ]
  },

  // ── FOREX ──────────────────────────────────────────────────────────────────
  {
    id: 'forex', icon: '💱', title: 'Forex',
    desc: 'Currency pairs, pips, spread, lot size, margin, leverage, and economic calendar.',
    topics: [
      { id: 'what-is-forex',              title: 'What is Forex Trading?',                         level: 'Beginner',     summary: 'An introduction to the world\'s largest financial market.' },
      { id: 'currency-pairs',             title: 'Major, Minor, and Exotic Pairs',                 level: 'Beginner',     summary: 'Understanding the different categories of currency pairs.' },
      { id: 'base-quote-currency',        title: 'Base Currency and Quote Currency',               level: 'Beginner',     summary: 'How currency pair pricing works.' },
      { id: 'what-are-pips',              title: 'What are Pips in Forex?',                        level: 'Beginner',     summary: 'Understanding pip values and how to calculate them.' },
      { id: 'what-is-spread',             title: 'What is Spread in Forex?',                       level: 'Beginner',     summary: 'How brokers make money and how spread affects your trades.' },
      { id: 'lot-margin-leverage',        title: 'Lot Size, Margin, and Leverage',                 level: 'Intermediate', summary: 'The three pillars of forex position sizing.' },
      { id: 'fa-forex',                   title: 'Fundamental Analysis in Forex',                  level: 'Intermediate', summary: 'Using economic data and news to trade currencies.' },
      { id: 'economic-calendar',          title: 'Economic Calendar and News Trading',             level: 'Intermediate', summary: 'How to use the economic calendar to anticipate market moves.' },
    ]
  },

  // ── TECHNICAL ANALYSIS ─────────────────────────────────────────────────────
  {
    id: 'technical-analysis', icon: '📐', title: 'Technical Analysis',
    desc: 'Charts, candlesticks, indicators, price action, patterns, SMC, volume, and risk management.',
    topics: [
      { id: 'what-is-ta', title: 'What is Technical Analysis?', level: 'Beginner', summary: 'The foundation of chart-based trading and its core principles.',
        content: [
          { type: 'image', src: 'images/SNRTA001.jpg', alt: 'What is Technical Analysis' },
          { type: 'paragraph', text: 'Technical Analysis is a method used by traders and investors to study market price movement through charts, patterns, volume, and indicators. Instead of focusing only on company news or financial statements, technical analysis focuses on how price behaves on the chart.' },
          { type: 'paragraph', text: 'The main idea behind technical analysis is simple: price reflects market psychology. Every candle, trendline, support level, resistance zone, and volume movement shows how buyers and sellers are reacting in the market.' },
          { type: 'paragraph', text: 'Technical analysis can be used in different financial markets, including stocks, commodities, crypto, and forex.' },
          { type: 'heading', text: 'Why Technical Analysis is Important' },
          { type: 'paragraph', text: 'Technical analysis helps traders understand the current market direction and identify possible trading opportunities. It allows traders to study whether the market is moving upward, downward, or sideways.' },
          { type: 'paragraph', text: 'By using technical analysis, traders can make more structured decisions instead of entering trades based on emotions, rumors, or random guesses.' },
          { type: 'paragraph', text: 'It helps in:' },
          { type: 'list', items: [
            'Identifying market trends',
            'Finding support and resistance levels',
            'Understanding buyer and seller behavior',
            'Planning entry and exit points',
            'Managing risk through stop loss and target levels',
            'Studying price momentum using indicators',
          ]},
          { type: 'heading', text: 'Key Elements of Technical Analysis' },
          { type: 'heading', text: '1. Price Charts' },
          { type: 'paragraph', text: 'Price charts are the foundation of technical analysis. They show how the price of an asset has moved over time. Traders commonly use line charts, bar charts, and candlestick charts.' },
          { type: 'paragraph', text: 'Among these, candlestick charts are the most popular because they show the open, high, low, and close price in a clear visual format.' },
          { type: 'heading', text: '2. Candlestick Patterns' },
          { type: 'paragraph', text: 'Candlestick patterns help traders understand market sentiment. Some patterns show buying pressure, while others show selling pressure.' },
          { type: 'paragraph', text: 'For example, bullish candles may suggest strength in the market, while bearish candles may suggest weakness. Patterns like engulfing candles, doji, hammer, and shooting star are commonly used by traders.' },
          { type: 'heading', text: '3. Support and Resistance' },
          { type: 'paragraph', text: 'Support is a price level where buyers may enter the market and stop the price from falling further.' },
          { type: 'paragraph', text: 'Resistance is a price level where sellers may become active and stop the price from rising further.' },
          { type: 'paragraph', text: 'These levels are important because markets often react around them. Traders use support and resistance to plan entries, exits, stop losses, and profit targets.' },
          { type: 'heading', text: '4. Trendlines and Market Structure' },
          { type: 'paragraph', text: 'Trendlines help traders identify the direction of the market. If price is making higher highs and higher lows, the market is usually in an uptrend. If price is making lower highs and lower lows, the market is usually in a downtrend.' },
          { type: 'paragraph', text: 'Understanding market structure helps traders avoid trading against the main direction of the market.' },
          { type: 'heading', text: '5. Indicators and Volume' },
          { type: 'paragraph', text: 'Indicators are tools that help traders analyze price momentum, trend strength, and possible reversal points. Common indicators include RSI, MACD, Moving Averages, Bollinger Bands, and Volume.' },
          { type: 'paragraph', text: 'Volume is also very important because it shows the strength behind a price move. A breakout with high volume is usually more meaningful than a breakout with weak volume.' },
          { type: 'heading', text: 'Technical Analysis Does Not Predict with 100% Accuracy' },
          { type: 'paragraph', text: 'Technical analysis is not a magic formula and it does not guarantee profit. It only helps traders analyze probability.' },
          { type: 'paragraph', text: 'A professional trader does not use technical analysis to predict the future with certainty. Instead, the goal is to create a trading plan based on probability, confirmation, and risk management.' },
          { type: 'paragraph', text: 'Even the best technical setup can fail, which is why stop loss and position sizing are very important.' },
          { type: 'heading', text: 'Technical Analysis vs Fundamental Analysis' },
          { type: 'paragraph', text: 'Technical analysis studies price charts, trends, volume, and patterns.' },
          { type: 'paragraph', text: 'Fundamental analysis studies financial statements, company performance, earnings, economic data, interest rates, and business value.' },
          { type: 'paragraph', text: 'Both methods are useful. Many traders use technical analysis for timing entries and exits, while investors use fundamental analysis to understand the long-term value of an asset.' },
          { type: 'heading', text: 'Final Thoughts' },
          { type: 'paragraph', text: 'Technical analysis is one of the most important skills for anyone who wants to understand financial markets. It helps traders read charts, identify trends, understand market behavior, and manage risk properly.' },
          { type: 'paragraph', text: 'For beginners, the best approach is to start with the basics: candlesticks, support and resistance, trendlines, volume, and risk management. Once these foundations are clear, advanced tools like indicators, chart patterns, and smart money concepts become easier to understand.' },
          { type: 'paragraph', text: 'In simple words, technical analysis helps traders read the language of the market through price charts.' },
          { type: 'callout', text: '<strong>Disclaimer:</strong> This content is for educational purposes only and should not be considered financial advice. Trading and investing involve risk, and every learner should do proper research before making any financial decision.' },
        ]
      },
      { id: 'ta-vs-fa', title: 'Technical vs Fundamental Analysis', level: 'Beginner', summary: 'Comparing the two main schools of market analysis.',
        content: [
          { type: 'image', src: 'images/SNRTA002.jpg', alt: 'Technical vs Fundamental Analysis' },
          { type: 'paragraph', text: 'In trading and investing, two of the most widely used approaches for market analysis are Technical Analysis and Fundamental Analysis. Both methods help market participants make informed decisions, but they focus on different types of information.' },
          { type: 'heading', text: 'Technical Analysis' },
          { type: 'paragraph', text: 'Technical Analysis studies price action, chart patterns, volume, trends, support and resistance levels, indicators, and market behavior. It is based on the idea that price reflects all available information and that historical price movements can help identify possible future market direction. Traders often use technical analysis to find entry points, exit points, trend continuation signals, reversal areas, and risk management levels.' },
          { type: 'heading', text: 'Fundamental Analysis' },
          { type: 'paragraph', text: 'Fundamental Analysis focuses on the actual financial strength, business performance, economic environment, and intrinsic value of an asset. In stocks, this may include earnings, revenue growth, profit margins, debt levels, cash flow, management quality, industry outlook, and valuation ratios such as EPS, P/E ratio, book value, and dividend yield. Fundamental analysis is often used to determine whether an asset is undervalued, overvalued, or fairly priced.' },
          { type: 'heading', text: 'The Key Difference' },
          { type: 'paragraph', text: 'Technical Analysis focuses on price behavior, while Fundamental Analysis focuses on value and business quality. Technical analysts ask, "What is the price doing?" Fundamental analysts ask, "What is the asset really worth?"' },
          { type: 'heading', text: 'Which One to Use?' },
          { type: 'paragraph', text: 'For short-term trading, technical analysis is commonly used because it helps traders understand market timing, momentum, and price levels. For long-term investing, fundamental analysis is often preferred because it helps investors evaluate the financial health and future potential of a company or asset.' },
          { type: 'heading', text: 'Combining Both Approaches' },
          { type: 'paragraph', text: 'The strongest approach often comes from combining both methods. A trader or investor can use fundamental analysis to identify strong assets and technical analysis to decide the best time to enter or exit the market. For example, a fundamentally strong stock may still not be a good buy if the chart shows weak momentum or a major resistance zone. Similarly, a stock may look technically attractive, but poor fundamentals can increase risk.' },
          { type: 'paragraph', text: 'In professional trading, both approaches have value. Technical analysis improves timing and risk control, while fundamental analysis improves selection and long-term confidence. Understanding the difference between the two helps traders develop a more balanced, disciplined, and informed market strategy.' },
          { type: 'callout', text: '<strong>In simple words:</strong> Technical Analysis helps you understand <em>when</em> to trade, while Fundamental Analysis helps you understand <em>what</em> to trade. Together, they provide a more complete view of the market.' },
          { type: 'callout', text: '<strong>Disclaimer:</strong> The content provided in this educational library is for general information and learning purposes only. It should not be considered as financial advice, investment advice, trading advice, or a recommendation to buy, sell, or hold any financial instrument. Trading and investing involve significant risk, including the possible loss of capital. Past performance, chart patterns, or historical market behavior do not guarantee future results. Every trader or investor must conduct their own research, apply proper risk management, and make decisions based on their personal financial situation and risk tolerance. By reading or using this material, you acknowledge that you are fully responsible for your own trading and investment decisions.' },
        ]
      },
      { id: 'price-action', title: 'Understanding Price Action', level: 'Beginner', summary: 'Reading raw price movement without indicators.',
        content: [
          { type: 'image', src: 'images/SNRTA003.jpg', alt: 'Understanding Price Action' },
          { type: 'paragraph', text: 'Price Action is one of the most important concepts in technical analysis. It refers to the study of price movement on a chart without depending heavily on indicators. Instead of focusing only on external tools, price action helps traders understand how the market is behaving through candles, trends, support and resistance levels, market structure, and key price zones.' },
          { type: 'paragraph', text: 'In simple words, price action shows the real-time battle between buyers and sellers. When buyers are stronger, price usually moves upward. When sellers dominate, price moves downward. By reading price action correctly, traders can identify possible trend direction, reversal areas, breakout opportunities, and risk zones.' },
          { type: 'heading', text: 'How Price Action Works' },
          { type: 'paragraph', text: 'A price action trader observes how price reacts at important levels. These levels may include previous highs and lows, support and resistance zones, supply and demand areas, trendlines, and consolidation ranges. For example, if price reaches a strong support zone and forms a bullish candle pattern, it may indicate that buyers are entering the market. Similarly, if price reaches resistance and starts rejecting that level, sellers may be gaining control.' },
          { type: 'heading', text: 'The Role of Candlestick Behavior' },
          { type: 'paragraph', text: 'Candlestick behavior is also a major part of price action. Candle size, wick length, body strength, and closing position can provide valuable information about market sentiment. A strong bullish candle may show buying pressure, while a long upper wick near resistance may show selling pressure. These small details help traders understand whether the market is showing strength, weakness, hesitation, or rejection.' },
          { type: 'heading', text: 'Why Price Action is Widely Used' },
          { type: 'paragraph', text: 'Price action is widely used because it provides a clean and direct view of the market. Unlike indicators, which are often based on past price data, price action focuses on what price is doing right now. This makes it useful for traders who want to understand market movement in a practical and professional way.' },
          { type: 'heading', text: 'Important Caution' },
          { type: 'paragraph', text: 'Price action should not be used randomly. A trader must combine it with proper market structure, risk management, and confirmation. Not every candle pattern or breakout is reliable. False breakouts, fake moves, and emotional trading can lead to losses if price action is not analyzed carefully.' },
          { type: 'heading', text: 'Key Questions Price Action Answers' },
          { type: 'paragraph', text: 'Professional traders often use price action to answer key questions such as:' },
          { type: 'list', items: [
            'Where is the market trending?',
            'Where are buyers and sellers active?',
            'Is price rejecting or accepting a level?',
            'Is the market forming a breakout, reversal, or continuation?',
            'Where should risk be managed?',
          ]},
          { type: 'heading', text: 'Price Action as the Foundation' },
          { type: 'paragraph', text: 'The main strength of price action is that it helps traders understand the logic behind market movement. Instead of blindly following signals, traders learn to read the chart, observe market behavior, and make more disciplined decisions.' },
          { type: 'paragraph', text: 'Whether a trader uses indicators, Smart Money Concepts, support and resistance, or candlestick patterns, understanding price action improves market reading and decision-making.' },
          { type: 'callout', text: '<strong>In simple words:</strong> Price Action helps traders understand what the market is doing, where buyers and sellers are active, and how price is reacting at important levels.' },
          { type: 'callout', text: '<strong>Disclaimer:</strong> The content provided in this educational library is for general information and learning purposes only. It should not be considered financial advice, investment advice, trading advice, or a recommendation to buy, sell, or hold any financial instrument. Trading and investing involve significant risk, including the possible loss of capital. Past performance, chart patterns, indicators, strategies, or historical market behavior do not guarantee future results. Any examples, charts, or strategies shared are for educational explanation only and should not be treated as direct trading signals. Every trader or investor must conduct their own research, apply proper risk management, and make decisions based on their personal financial situation and risk tolerance. By reading or using this material, you acknowledge that you are fully responsible for your own trading and investment decisions.' },
        ]
      },
      { id: 'candlestick-charts',         title: 'Candlestick Charts Explained',                   level: 'Beginner',     summary: 'How to read and interpret candlestick charts.' },
      { id: 'candlestick-patterns',       title: 'Most Important Candlestick Patterns',            level: 'Beginner',     summary: 'The key candlestick formations every trader must know.' },
      { id: 'support-resistance',         title: 'Support and Resistance',                         level: 'Beginner',     summary: 'Identifying key price levels where the market reacts.' },
      { id: 'trendlines-channels',        title: 'Trendlines and Channels',                        level: 'Beginner',     summary: 'Drawing and trading dynamic support and resistance.' },
      { id: 'market-structure',           title: 'Market Structure: HH and LL',                   level: 'Beginner',     summary: 'Reading the sequence of highs and lows to define trend.' },
      { id: 'dow-theory',                 title: 'Dow Theory for Beginners',                       level: 'Beginner',     summary: 'The original framework for understanding market trends.' },
      { id: 'breakout-trading',           title: 'Breakout and Breakdown Trading',                 level: 'Intermediate', summary: 'Trading decisive moves beyond key levels.' },
      { id: 'fake-breakouts',             title: 'Fake Breakouts and Liquidity Traps',             level: 'Intermediate', summary: 'Identifying and avoiding false breakout setups.' },
      { id: 'volume-analysis',            title: 'Volume Analysis',                                level: 'Intermediate', summary: 'Using volume to confirm price moves and spot reversals.' },
      { id: 'moving-averages',            title: 'Moving Averages: SMA and EMA',                   level: 'Beginner',     summary: 'How moving averages smooth price and signal trend direction.' },
      { id: 'rsi-indicator',              title: 'RSI Indicator Explained',                        level: 'Beginner',     summary: 'Using RSI to spot overbought and oversold conditions.' },
      { id: 'macd-indicator',             title: 'MACD Indicator Explained',                       level: 'Intermediate', summary: 'The MACD indicator in practice — signal line, histogram, divergence.' },
      { id: 'bollinger-bands',            title: 'Bollinger Bands Explained',                      level: 'Intermediate', summary: 'Using Bollinger Bands to gauge volatility and price extremes.' },
      { id: 'fibonacci',                  title: 'Fibonacci Retracement and Extension',            level: 'Intermediate', summary: 'Using Fibonacci levels to find high-probability entries and targets.' },
      { id: 'chart-patterns-shapes',      title: 'Chart Patterns: Triangle, Flag, Wedge',         level: 'Intermediate', summary: 'Recognising and trading the most common continuation and reversal patterns.' },
      { id: 'head-and-shoulders',         title: 'Head and Shoulders Pattern',                     level: 'Intermediate', summary: 'The classic reversal pattern and how to trade it.' },
      { id: 'double-top-bottom',          title: 'Double Top and Double Bottom',                   level: 'Intermediate', summary: 'Identifying twin-peak and twin-valley reversal setups.' },
      { id: 'multi-timeframe',            title: 'Multi-Timeframe Analysis',                       level: 'Intermediate', summary: 'Using higher timeframes to confirm lower timeframe signals.' },
      { id: 'smc-intro',                  title: 'Smart Money Concepts Introduction',              level: 'Advanced',     summary: 'Understanding how institutional traders move markets.' },
      { id: 'ob-fvg-bos-choch',           title: 'Order Blocks, FVG, BOS and CHOCH',              level: 'Advanced',     summary: 'Key SMC concepts for identifying institutional footprints.' },
      { id: 'risk-reward',                title: 'Risk Reward Ratio in Trading',                   level: 'Beginner',     summary: 'Why your risk-to-reward ratio determines long-term profitability.' },
      { id: 'sl-tp-planning',             title: 'Stop Loss and Take Profit Planning',             level: 'Beginner',     summary: 'Placing logical stop losses and take profit levels on every trade.' },
    ]
  },

  // ── FUNDAMENTAL ANALYSIS ───────────────────────────────────────────────────
  {
    id: 'fundamental-analysis', icon: '📊', title: 'Fundamental Analysis',
    desc: 'Company valuation, financial statements, EPS, P/E ratio, macroeconomic data, and asset-based analysis.',
    topics: [
      { id: 'what-is-fa',                 title: 'What is Fundamental Analysis?',                  level: 'Beginner',     summary: 'The practice of evaluating an asset based on its intrinsic value.' },
      { id: 'why-fa-matters',             title: 'Why Fundamental Analysis Matters',               level: 'Beginner',     summary: 'How FA helps investors find undervalued opportunities.' },
      { id: 'company-financials',         title: 'Understanding Company Financial Statements',     level: 'Beginner',     summary: 'The three core financial documents every investor should read.' },
      { id: 'balance-sheet',              title: 'Balance Sheet Explained',                        level: 'Beginner',     summary: 'Assets, liabilities, and equity — reading a company\'s balance sheet.' },
      { id: 'income-statement',           title: 'Income Statement Explained',                     level: 'Beginner',     summary: 'Revenue, expenses, and profit on the income statement.' },
      { id: 'cash-flow-statement',        title: 'Cash Flow Statement Explained',                  level: 'Beginner',     summary: 'How cash moves in and out of a business.' },
      { id: 'revenue-profit-income',      title: 'Revenue, Profit, and Net Income',                level: 'Beginner',     summary: 'The difference between top-line and bottom-line numbers.' },
      { id: 'eps-explained',              title: 'EPS: Earnings Per Share Explained',              level: 'Beginner',     summary: 'What EPS reveals about a company\'s profitability per share.' },
      { id: 'pe-ratio-explained',         title: 'P/E Ratio Explained',                            level: 'Beginner',     summary: 'How to use the Price-to-Earnings ratio to value stocks.' },
      { id: 'book-value-pb',              title: 'Book Value and Price-to-Book Ratio',             level: 'Intermediate', summary: 'Measuring what a company is worth on paper vs its market price.' },
      { id: 'dividend-payout',            title: 'Dividend Yield and Payout Ratio',                level: 'Beginner',     summary: 'Evaluating how much a company returns to shareholders.' },
      { id: 'debt-to-equity',             title: 'Debt-to-Equity Ratio',                           level: 'Intermediate', summary: 'Measuring financial leverage and balance sheet risk.' },
      { id: 'roe-roa',                    title: 'Return on Equity and Return on Assets',          level: 'Intermediate', summary: 'Efficiency ratios that reveal how well a company uses its resources.' },
      { id: 'free-cash-flow',             title: 'Free Cash Flow Explained',                       level: 'Intermediate', summary: 'Why FCF is often more telling than reported profit.' },
      { id: 'market-cap-explained',       title: 'Market Capitalization Explained',                level: 'Beginner',     summary: 'Understanding the total market value of a company.' },
      { id: 'sector-industry',            title: 'Sector and Industry Analysis',                   level: 'Intermediate', summary: 'Evaluating companies within the context of their sector.' },
      { id: 'economic-moat',              title: 'Economic Moat and Competitive Advantage',        level: 'Intermediate', summary: 'What makes a business durable and hard to compete with.' },
      { id: 'growth-vs-value',            title: 'Growth Stocks vs Value Stocks',                  level: 'Intermediate', summary: 'Two contrasting investment philosophies explained.' },
      { id: 'undervalued-overvalued',     title: 'Undervalued vs Overvalued Stocks',               level: 'Intermediate', summary: 'How to determine if a stock is priced fairly.' },
      { id: 'interest-rates-markets',     title: 'Interest Rates and Their Impact on Markets',     level: 'Intermediate', summary: 'Why central bank decisions move stocks, bonds, and currencies.' },
      { id: 'inflation-investments',      title: 'Inflation and Its Impact on Investments',        level: 'Intermediate', summary: 'How rising prices erode or shift investment returns.' },
      { id: 'gdp-employment-sentiment',   title: 'GDP, Employment Data and Market Sentiment',      level: 'Intermediate', summary: 'Key macroeconomic indicators and how markets respond.' },
      { id: 'commodity-fa',               title: 'Commodity Fundamental Analysis',                 level: 'Intermediate', summary: 'Applying fundamental analysis to gold, oil, and other commodities.' },
      { id: 'crypto-fa',                  title: 'Crypto Fundamental Analysis',                    level: 'Intermediate', summary: 'Evaluating cryptocurrencies beyond price charts.' },
      { id: 'forex-fa',                   title: 'Forex Fundamental Analysis',                     level: 'Intermediate', summary: 'Using macroeconomic data to trade currency pairs.' },
    ]
  },
];
