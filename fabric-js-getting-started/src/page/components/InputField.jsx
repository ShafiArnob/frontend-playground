import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({
  value,
  onChange,
  type = "text",
  uniqueId,
  label,
  className = "",
}) => {
  return (
    <div className={`grid w-full max-w-sm items-center gap-3 ${className}`}>
      <Label htmlFor={uniqueId}>{label}</Label>
      <Input id={uniqueId} type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
