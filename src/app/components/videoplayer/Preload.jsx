'use client'

import { useState, useEffect } from 'react';
import Preview from '@/app/components/videoplayer/preview/Preview';
import styles from './videoplayer.module.css'
import Player from './video/Player';

export default function ClientPreloader() {
  const [showSecondPreloader, setShowSecondPreloader] = useState(false);

  useEffect(() => {
    // Show the second preloader after 9 seconds
    const timeoutId = setTimeout(() => {
      setShowSecondPreloader(true);
    }, 9000);

    // Cleanup timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.preloader}>

      {showSecondPreloader && <Preview />}

      {<Player/>}
    </div>
  );
}
