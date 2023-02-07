import React from 'react';

export default function FormField({
  handleChange,
  labelName,
  type,
  name,
  placeholder,
  value,
  isSurpriseMe,
  handleSurpriseMe,
}) {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg[#ECECF1] py-1 px-2 rounded=[5px] text-black'>
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block p-3'></input>
    </div>
  );
}
