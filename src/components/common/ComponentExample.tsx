import React from "react";
import { CustomButton } from "./CustomButton";
import { CustomCard } from "./CustomCard";

export function ComponentExample() {
  return (
    <div className="space-y-8 p-6">
      <section>
        <h2 className="text-xl font-semibold mb-4">Custom Button Examples</h2>
        <div className="flex flex-wrap gap-4">
          <CustomButton>Default Button</CustomButton>
          <CustomButton type="transparent">Transparent Button</CustomButton>
          <CustomButton leftIcon={<span>👈</span>}>Left Icon</CustomButton>
          <CustomButton rightIcon={<span>👉</span>}>Right Icon</CustomButton>
          <CustomButton leftIcon={<span>🔍</span>} rightIcon={<span>🚀</span>}>
            Both Icons
          </CustomButton>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Custom Card Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CustomCard>
            <h3 className="text-lg font-medium">Default Card</h3>
            <p>This is a default card with solid background.</p>
          </CustomCard>
          
          <CustomCard type="transparent">
            <h3 className="text-lg font-medium">Transparent Card</h3>
            <p>This is a transparent card with glassmorphism effect.</p>
          </CustomCard>
        </div>
      </section>
    </div>
  );
} 