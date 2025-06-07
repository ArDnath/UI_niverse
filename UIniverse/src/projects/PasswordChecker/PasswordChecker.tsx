import { useState, useEffect } from "react";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  useEffect(() => {
    const strengthLevel = getPasswordStrength(password.trim());
    setStrength(strengthLevel);
  }, [password]);

  const getPasswordStrength = (pwd: string): string => {
    if (!pwd) return "";

    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^a-zA-Z0-9]/.test(pwd)) score++;

    if (score <= 2) return "Weak";
    if (score === 3) return "Medium";
    return "Strong";
  };

  const getColor = () => {
    if (strength === "Weak") return "text-red-500";
    if (strength === "Medium") return "text-yellow-500";
    if (strength === "Strong") return "text-green-500";
    return "text-gray-400";
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Password Strength Checker
        </h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-3 rounded w-full mb-4"
          placeholder="Enter your password"
        />
        <p className={`text-lg font-semibold text-center ${getColor()}`}>
          {strength && <>Password Strength: {strength}</>}
        </p>
      </div>
    </div>
  );
};

export default PasswordChecker;
