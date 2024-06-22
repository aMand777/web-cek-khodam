import { useContext } from 'react';
import { NameContext } from '@/context/Name';

const useInitialName = () => useContext(NameContext);

export default useInitialName;