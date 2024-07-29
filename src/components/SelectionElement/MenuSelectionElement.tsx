import useAppStore from "../../store/useAppStore";

import { Quizz } from "../../interfaces";

import { QUIZZ_ICONS } from "../../utils/quizzIcons";

import SelectionElementContainer from "./SelectionElementContainer";

interface Props {
  quiz: Quizz;
}

const MenuSelectionElement: React.FC<Props> = ({ quiz }) => {
  const setGameSelected = useAppStore((state) => state.setGameSelected);

  return (
    <SelectionElementContainer onClick={() => setGameSelected(quiz)}>
      {QUIZZ_ICONS[quiz.title]}
      <p className="flex-1 text-darkBlue dark:text-white">{quiz.title}</p>
    </SelectionElementContainer>
  );
};

export default MenuSelectionElement;
