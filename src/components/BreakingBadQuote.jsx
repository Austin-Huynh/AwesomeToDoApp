import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const BreakingBadQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchBreakingBadQuote = async () => {
    try {
      const response = await fetch(
        'https://api.breakingbadquotes.xyz/v1/quotes',
      );

      if (!response.ok) {
        throw new Error('Failed to fetch Breaking Bad quote');
      }

      const json = await response.json();
      const {quote, author} = json[0];
      setQuote(quote);
      setAuthor(author);
    } catch (error) {
      console.error('Error fetching Breaking Bad quote:', error.message);
    }
  };

  useEffect(() => {
    fetchBreakingBadQuote();
  }, []); // Empty dependency array to fetch the quote on component mount

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 10,
          marginTop: 20,
        }}>
        Breaking Bad Quote:
      </Text>
      <Text style={{fontSize: 16, textAlign: 'center', marginBottom: 10}}>
        "{quote}"
      </Text>
      <Text style={{fontSize: 14, textAlign: 'center', marginBottom: 20}}>
        - {author}
      </Text>
      <Button title="Get Another Quote" onPress={fetchBreakingBadQuote} />
    </View>
  );
};

export default BreakingBadQuote;
