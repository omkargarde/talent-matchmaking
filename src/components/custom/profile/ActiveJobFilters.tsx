"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "../../ui/button";
import { useSelector } from "react-redux";
import {
  getSelectedCategory,
  setSelectedCategory,
} from "@/stores/profile/profilesSlice";
import { store } from "@/stores/store";
import { X } from "lucide-react";

export default function ActiveJobFilters() {
  const dispatch = store();
  const selectedCategory = useSelector(getSelectedCategory);

  function unselectCategory() {
    dispatch(setSelectedCategory(null));
  }

  return (
    <section
      className={`min-h-12 overflow-hidden transition-all duration-300 ${
        selectedCategory !== null ? "opacity-100" : "opacity-0"
      }`}
    >
      {selectedCategory !== null && (
        <>
          <span>showing all the</span>
          <Badge asChild className="mx-2 cursor-pointer rounded-full">
            <Button onClick={unselectCategory}>
              {selectedCategory}
              <X />
            </Button>
          </Badge>
        </>
      )}
    </section>
  );
}
