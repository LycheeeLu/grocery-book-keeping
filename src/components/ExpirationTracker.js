const expirationData = {
    egg: 7,
    tomato: 5,
    cabbage: 10,
  };
  
  export function trackExpiration(items) {
    return items.map(item => ({
      ...item,
      expiresIn: expirationData[item.name] || 3
    }));
  }
  