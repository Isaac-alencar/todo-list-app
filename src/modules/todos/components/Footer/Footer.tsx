import { useTodos } from "modules/todos/contexts/TodosContext";
import { Filters as FiltersType } from "modules/todos/domain/filters";

import * as S from "./Footer.styles";

const FILTERS = [FiltersType.all, FiltersType.active, FiltersType.completed];

function Footer() {
  const { setCurrentFilter, currentFilter, totalTodosCount } = useTodos();

  const handleSelectFilter = (filter: FiltersType) => {
    setCurrentFilter(filter);
  };

  return (
    <S.Footer>
      <S.RemainingTasks>{totalTodosCount} tasks left</S.RemainingTasks>
      <S.FiltersContainer>
        {FILTERS.map((filter) => {
          return (
            <S.Filter
              key={filter}
              onClick={() => handleSelectFilter(filter)}
              isEnabled={currentFilter === filter}
            >
              {FiltersType[filter]}
            </S.Filter>
          );
        })}
      </S.FiltersContainer>
    </S.Footer>
  );
}

export default Footer;
