import { DayParams, FullRecipe } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';
import { addRecipeToMenu } from '../db/prisma';
import days from '../db/days';

const DaysDropDown = ({ id, portions }: { id: string; portions:number }) => {
  const [day, setDay] = useState<DayParams>('Undecided');
  return (
    <>
      <select
        className="border-2 p-1.5 px-4 rounded-md border-black m-4"
        name="day"
        id="day"
        value={day}
        onChange={e => setDay(e.target.value as DayParams)}
      >
        {days.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <Link href={'/recipes'}>
        <button
          className="border-2 p-1.5 px-4 rounded-md border-black m-4"
          onClick={() =>
            addRecipeToMenu({
              id,
              portions,
              day: day,
            })
          }
        >
          Add
        </button>
      </Link>
    </>
  );
};

export default DaysDropDown;
