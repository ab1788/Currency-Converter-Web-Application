# Currency-Converter-Web-Application
Features

Real-time currency conversion using the latest exchange rates
Support for 150+ currencies worldwide
Interactive UI with flag display for each country's currency
Ability to swap between source and target currencies with a single click
Mobile-friendly responsive design

Technologies Used

HTML5
CSS3
JavaScript (ES6+)
Currency API for exchange rates
FlagsAPI for country flags
Font Awesome 6.7.2 for icons

How It Works
The application fetches real-time exchange rates from the Currency API and updates the conversion based on user input. It also displays the country flag corresponding to each selected currency using the FlagsAPI.
Installation

Clone the repository:

bashCopygit clone https://github.com/your-github-username/currency-converter.git

Navigate to the project directory:

bashCopycd currency-converter

Open index.html in your preferred browser.

Usage

Enter the amount you want to convert in the input field
Select the source currency from the "From" dropdown
Select the target currency from the "To" dropdown
The conversion result will update automatically

Project Structure
Copycurrency-converter/
├── index.html         # Main HTML structure
├── stylesheet.css     # Styling for the application
├── scripts.js         # Main application logic
├── codes.js           # Currency and country code mappings
└── README.md          # Project documentation
API Usage
This project uses two APIs:

Currency API: Fetches the latest exchange rates

Base URL: https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies


FlagsAPI: Provides flag images for each country

URL format: https://flagsapi.com/${countryCode}/flat/64.png



Future Enhancements

Add historical conversion rate charts
Implement dark mode
Save favorite currency pairs
Add offline support
Create a mobile app version

Contributing

Fork the repository
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.
Acknowledgments

Currency API for providing free exchange rate data
FlagsAPI for the country flag images
Font Awesome for the icons