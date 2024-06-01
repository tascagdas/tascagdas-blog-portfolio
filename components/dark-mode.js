'use client'

import useDarkMode from '@/hooks/use-dark-mode'
import React, { useState } from 'react'

const nextModeIcons = {
    'light': '🌙',
    'dark':'🌞'
}

const DarkMode = () => {

    const {theme,toggleTheme } = useDarkMode();

    return (
        <>
            <button onClick={toggleTheme}>
                {nextModeIcons[theme]}
            </button>
        </>
    )
}

export default DarkMode