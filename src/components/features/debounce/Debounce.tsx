import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useDebounce from '../../../hooks/useDebounce';

function callApi(search: string) {
  return new Promise<string>((res) => {
    setTimeout(() => {
      console.log('promised completed for search :>> ', search);
      res(`returned:${search}`);
    }, search === 'abc' ? 8000 : 5000);
  });
}

export default function debounce() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearchTerm, searchId] = useDebounce(searchTerm, 3000);
  const cancelledSearches = useRef<number[]>([]);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        console.log(`[${searchId}]searching :>> ${debouncedSearchTerm} isSearching: ${isSearching}`);
        setIsSearching(true);
        callApi(debouncedSearchTerm).then((r) => {
          console.log(`trying to set for : ${debouncedSearchTerm}, cancelledSearches: ${cancelledSearches.current.join(',')}`);
          if (!cancelledSearches.current.includes(searchId)) {
            setIsSearching(false);
            setResults(r);
          }
        });
      } else {
        setResults('');
        setIsSearching(false);
      }
    },
    [debouncedSearchTerm],
  );

  useEffect(
    () => {
      if (isSearching) {
        console.log(`cancelling for [${searchId}]-${debouncedSearchTerm}`);
        cancelledSearches.current.push(searchId);
      }
    },
    [searchTerm],
  );

  return (
    <Box>
      <Box>
        <Box>
          <Box component="span"> is searching?: {isSearching.toString()}</Box>
          <Box component="span"> result: {results}</Box>

        </Box>
        <Box component="span">User to search: </Box>
        <TextField onChange={(e) => setSearchTerm(e.target.value)} />
      </Box>

    </Box>
  );
}
