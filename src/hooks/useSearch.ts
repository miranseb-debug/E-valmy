import { useState } from 'react';

export const useSearch = (items: any[], searchFields: string[]) => {
  const [query, setQuery] = useState('');

  const results = items.filter((item) =>
    searchFields.some((field) =>
      String(item[field]).toLowerCase().includes(query.toLowerCase())
    )
  );

  return { query, setQuery, results };
};
