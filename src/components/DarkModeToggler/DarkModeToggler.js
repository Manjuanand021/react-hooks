import useDarkMode from '../../hooks/useDarkMode';

const DarkModeToggler = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    function handleChange(event) {
        const { value } = event.target;
        toggleDarkMode(value === 'dark');
    }
    return (
        <div className={`h-screen mt-2 ${isDarkMode ? 'bg-gray-400' : 'bg-white'} `}>
            <label className="inline-flex items-center pr-5">
                <input
                    type="radio"
                    className="form-radio"
                    name="mode"
                    value="light"
                    checked={!isDarkMode}
                    onChange={handleChange}
                />
                <span className="ml-2">Light</span>
            </label>
            <label className="inline-flex items-center">
                <input
                    type="radio"
                    className="form-radio"
                    name="mode"
                    value="dark"
                    checked={isDarkMode}
                    onChange={handleChange}
                />
                <span className="ml-2">Dark</span>
            </label>
        </div>
    );
};
export default DarkModeToggler;
