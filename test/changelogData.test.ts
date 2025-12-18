import { changelogData, ChangelogEntry } from "../src/lib/changelogData";

describe("Changelog Data", () => {
  it("should have entries sorted by date in descending order", () => {
    for (let i = 0; i < changelogData.length - 1; i++) {
      const currentDate = new Date(changelogData[i].date);
      const nextDate = new Date(changelogData[i + 1].date);
      expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
    }
  });

  changelogData.forEach((entry: ChangelogEntry, index: number) => {
    describe(`Entry ${index + 1} (Version: ${entry.version}, Date: ${entry.date})`, () => {
      it("should have a valid date format", () => {
        expect(entry.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        const date = new Date(entry.date);
        expect(date.toString()).not.toBe("Invalid Date");
      });

      it("should have a valid semver version number", () => {
        expect(entry.version).toMatch(/^\d+\.\d+\.\d+$/);
      });

      it("should have a valid change type", () => {
        const validTypes = ["feature", "improvement", "bugfix", "breaking"];
        expect(validTypes).toContain(entry.type);
      });

      it("should have valid change types for all sub-changes", () => {
        const validChangeTypes = ["added", "changed", "fixed", "removed", "improved"];
        entry.changes.forEach((change) => {
          expect(validChangeTypes).toContain(change.type);
        });
      });
    });
  });
});
