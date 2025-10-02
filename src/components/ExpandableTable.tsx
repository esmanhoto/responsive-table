import React, { useState } from "react";
import styles from "./ExpandableTable.module.css";
import dataCrunchLogo from "../assets/dataCrunchLogo.png";

const columnCount = 6;
const rowCount = 2;
const columns: string[] = Array.from(
  { length: columnCount },
  (_, i) => `Column ${i + 1}`
);
const rows: string[][] = Array.from({ length: rowCount }, (_, rowIdx) =>
  Array.from(
    { length: columnCount },
    (_, colIdx) => `Cell content ${rowIdx * columnCount + colIdx + 1}`
  )
);

const ExpandableTable: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean[]>([false, false]);

  const toggleRow = (idx: number) => {
    setExpanded((exp: boolean[]) => exp.map((e, i) => (i === idx ? !e : e)));
  };

  return (
    <div className={styles.tableWrapper}>
      <div
        className={styles.tableGrid}
        role="table"
        aria-label="Expandable data table"
        aria-rowcount={rowCount + 1}
        aria-colcount={columnCount + 1}
        data-cy="expandable-table"
      >
        <div
          className={styles.headerRow}
          role="row"
          aria-rowindex={1}
          data-cy="table-header"
        >
          <div
            className={styles.iconHeader}
            role="columnheader"
            aria-label="dataCrunch Logo"
          >
            <img
              src={dataCrunchLogo}
              alt="dataCrunch"
              className={styles.logo}
              data-cy="logo"
            />
          </div>
          {columns.map((col: string) => (
            <div
              key={col}
              className={styles.header}
              role="columnheader"
              aria-sort="none"
            >
              {col}
            </div>
          ))}
        </div>
        <div className={styles.rowGroup}>
          {rows.map((row: string[], idx: number) => (
            <div key={idx} className={styles.rowContainer}>
              <div
                className={
                  expanded[idx]
                    ? `${styles.row} ${styles.expanded}`
                    : styles.row
                }
                role="row"
                aria-rowindex={idx + 2}
                aria-expanded={expanded[idx]}
                data-cy={`table-row-${idx}`}
                aria-describedby={
                  expanded[idx] ? `expanded-content-${idx}` : undefined
                }
                onClick={() => toggleRow(idx)}
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleRow(idx);
                  }
                }}
                onFocus={e => e.currentTarget.classList.add(styles.focusedRow)}
                onBlur={e =>
                  e.currentTarget.classList.remove(styles.focusedRow)
                }
              >
                <div className={styles.expandCell} role="gridcell">
                  <span
                    className={
                      expanded[idx]
                        ? `${styles.expandIcon} ${styles.iconRotated}`
                        : styles.expandIcon
                    }
                    role="button"
                    aria-label={`${expanded[idx] ? "Collapse" : "Expand"} row ${
                      idx + 1
                    }`}
                    aria-expanded={expanded[idx]}
                    data-cy={`expand-button-${idx}`}
                  >
                    {" > "}
                  </span>
                </div>
                {/* Desktop layout */}
                {row.map((cell: string, i: number) => (
                  <div
                    key={i}
                    className={styles.cell}
                    role="gridcell"
                    data-label={columns[i]}
                    aria-describedby={`header-${i}`}
                  >
                    {cell}
                  </div>
                ))}
                {/* Mobile responsive layout */}
                <div
                  className={styles.mobileGrid}
                  role="grid"
                  aria-label="Row data"
                >
                  {row.map((cell: string, i: number) => (
                    <div
                      key={i}
                      className={styles.mobileCell}
                      role="gridcell"
                      data-label={columns[i]}
                      aria-label={`${columns[i]}: ${cell}`}
                    >
                      {cell}
                    </div>
                  ))}
                </div>
              </div>
              {expanded[idx] && (
                <div
                  className={styles.expandedRow}
                  role="row"
                  aria-rowindex={idx + 3}
                  id={`expanded-content-${idx}`}
                  aria-live="polite"
                  data-cy={`expanded-content-${idx}`}
                >
                  <div className={styles.expandedContent} role="gridcell">
                    Expanded content for row {idx + 1}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandableTable;
