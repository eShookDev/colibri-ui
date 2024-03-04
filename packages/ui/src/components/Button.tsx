import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "..";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { }

const buttonVariants = cva(
    "inline-flex items-center justify-center",
    {
        variants: {
            variant: {
                default: "",
                outline: "border hover:bg-white hover:text-black"
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {

    const {
        variant,
        size,
        className,
        ...rest
    } = props;

    const Component = "button";

    return (
        <Component
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            {...rest}
        />
    )

})

Button.displayName = "Button"

export { Button, buttonVariants }