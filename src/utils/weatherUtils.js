export const mapCode = (weatherCode) => {
    const mapping = {
      0: { icon: '/sunny.svg', description: 'Clear' },
      1: { icon: '/sunny.svg', description: 'Clear' },
      2: { icon: '/partlycloudy.svg', description: 'Cloudy' },
      3: { icon: '/cloudy.svg', description: 'Overcast' },
      45: { icon: '/fog.svg', description: 'Fog' },
      48: { icon: '/fog.svg', description: 'Fog' },
      51: { icon: '/rain2.svg', description: 'Drizzle' },
      53: { icon: '/rain2.svg', description: 'Drizzle' },
      55: { icon: '/rain2.svg', description: 'Drizzle' },
      56: { icon: '/rain2.svg', description: 'Drizzle' },
      57: { icon: '/rain2.svg', description: 'Drizzle' },
      61: { icon: '/rain2.svg', description: 'Rain' },
      63: { icon: '/rain2.svg', description: 'Rain' },
      65: { icon: '/rain2.svg', description: 'Rain' },
      66: { icon: '/rain2.svg', description: 'Rain' },
      67: { icon: '/rain2.svg', description: 'Rain' },
      71: { icon: '/sunny.svg', description: 'Snow' },
      73: { icon: '/sunny.svg', description: 'Snow' },
      75: { icon: '/sunny.svg', description: 'Snow' },
      77: { icon: '/sunny.svg', description: 'Snow' },
      80: { icon: '/sunny.svg', description: 'Showers' },
      81: { icon: '/sunny.svg', description: 'Showers' },
      82: { icon: '/sunny.svg', description: 'Showers' },
      85: { icon: '/sunny.svg', description: 'Snow' },
      86: { icon: '/sunny.svg', description: 'Snow ' },
      95: { icon: '/sunny.svg', description: 'Thunderstorm ' },
      96: { icon: '/sunny.svg', description: 'Thunderstorm ' },
      99: { icon: '/sunny.svg', description: 'Thunderstorm ' },
    };
  
    return mapping[weatherCode] || { icon: '/unknown.svg', description: 'Unknown' };
};
